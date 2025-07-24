import { Schema, model, Types } from 'mongoose';

const componentSchema = new Schema(
  {
    code: { type: String, required: true },
    label: String,
    type: { type: String, enum: ['earning', 'deduction', 'meta'], default: 'earning' },
    formula: { type: String, required: true },
    rounding: { type: String, enum: ['none', 'round', 'ceil', 'floor'], default: 'round' },
    taxable: Boolean
  },
  { _id: false }
);

const schemeSchema = new Schema(
  {
    contractId: { type: Types.ObjectId, ref: 'Contract', required: true },
    version: { type: Number, required: true },
    effective_from: { type: Date, required: true },
    components: { type: [componentSchema], required: true },
    isDraft: { type: Boolean, default: false }
  },
  { timestamps: true }
);

schemeSchema.index({ contractId: 1, version: -1 }, { unique: true });
contractSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
contractSchema.set('toJSON', { virtuals: true });


export default model('SalaryScheme', schemeSchema);
