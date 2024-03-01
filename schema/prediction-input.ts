import * as z from 'zod';

export const predictionInputSchema = z.object({
    age: z.coerce.number({invalid_type_error: "Provide valid age"}).min(14, {message:"Age should be greater than 14"}),
    num_sexual_partners: z.coerce.number(),
    first_sexual_intercourse: z.coerce.number(), 
    num_pregnancies: z.coerce.number(),
    smoking_years: z.coerce.number(),
    hormonal_contraceptives_years: z.coerce.number(),
    iud_years: z.coerce.number(),
    num_stds: z.coerce.number(),
    stds_condylomatosis: z.coerce.number(),
    stds_cervical_condylomatosis: z.coerce.number(),
    stds_hiv: z.coerce.number(),
    stds_hpv: z.coerce.number(),
    dx_cin: z.coerce.number(),
    dx_hpv: z.coerce.number(),
});

type PredictionInput = z.infer<typeof predictionInputSchema>;
export default PredictionInput