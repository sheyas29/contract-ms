import Contract from '../models/Contract.js';
import SalaryScheme from '../models/SalaryScheme.js';
import { statutoryTemplate } from '../utils/salaryTemplates.js';

export const createContract = async (req, res) => {
  try {
    const { useDefaultScheme, ...rest } = req.body;

    const contract = await Contract.create(rest);

    // Optional statutory scheme
    if (useDefaultScheme) {
      const tpl = { ...statutoryTemplate };
      tpl.contractId      = contract._id;
      tpl.effective_from  = rest.startDate || new Date();
      await SalaryScheme.create(tpl);
    }

    res.status(201).json(contract);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
