import { create, all } from 'mathjs';
const math = create(all, {});

export const previewScheme = (req, res) => {
  try {
    const { scheme, variables } = req.body;      // scheme = { components:[…] }
    const scope = { ...variables };

    const results = scheme.components.map((c) => {
      const amount = math.evaluate(c.formula, scope);
      scope[c.code] = amount;                    // for downstream formulas
      return { code: c.code, amt: amount };
    });

    const net = scope.NET ?? null;
    res.json({ breakdown: results, net });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
