import { object, string, InferType } from "yup";

const upsampleCallInputsSchema = object({
  MODEL_ID: string().oneOf([
    "RealESRGAN_x4plus",
    "RealESRGAN_x4plus_anime_6B",
    "realesr-general-x4v3",
  ]),
  // .default("RealESRGAN_x4plus),
  startRequestId: string(),
});

type UpsampleCallInputs = InferType<typeof upsampleCallInputsSchema>;

export type { UpsampleCallInputs };
export { upsampleCallInputsSchema };
export default upsampleCallInputsSchema;
