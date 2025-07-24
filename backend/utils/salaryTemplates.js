export const statutoryTemplate = {
  version: 1,
  effective_from: new Date(),          // will be overridden
  components: [
    { code: 'GROSS',     label: 'Gross',       type: 'earning',   formula: 'present_days * daily_wage' },
    { code: 'EPF_EMP',   label: 'EPF Emp',     type: 'deduction', formula: 'min(GROSS, 15000) * 0.12' },
    { code: 'ESIC_EMP',  label: 'ESIC Emp',    type: 'deduction', formula: 'min(GROSS, 21000) * 0.0075' },
    { code: 'PTAX',      label: 'Professional Tax', type: 'deduction',
      formula: 'GROSS > 20000 ? 200 : (GROSS > 15000 ? 150 : 0)' },
    { code: 'DEDN',      label: 'Deductions',  type: 'deduction', formula: 'EPF_EMP + ESIC_EMP + PTAX' },
    { code: 'NET',       label: 'Net Pay',     type: 'earning',   formula: 'GROSS - DEDN' },
    { code: 'EPF_ER',    label: 'EPF Er',      type: 'meta',      formula: 'min(GROSS, 15000) * 0.12' },
    { code: 'ESIC_ER',   label: 'ESIC Er',     type: 'meta',      formula: 'min(GROSS, 21000) * 0.0325' },
    { code: 'PF_ADMIN',  label: 'PF Admin',    type: 'meta',      formula: 'max(GROSS * 0.005, 75)' },
    { code: 'PF_CONTR',  label: 'PF Contrib',  type: 'meta',      formula: 'min(GROSS * 0.005, 75)' }
  ]
};
