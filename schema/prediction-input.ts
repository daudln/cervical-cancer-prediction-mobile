import * as z from 'zod';

export const predictionInputSchema = z.object({
    age: z.number({invalid_type_error: "Provide valid age"}).min(14, {message:"Age should be greater than 14"}),
    number_of_sexual_partners: z.number(),
    first_sexual_intercourse: z.number(), 
    number_of_pregnancies: z.number(),
    smokes_years: z.number(),
    hormonal_contraceptives_years: z.number(),
    iud_years: z.number(),
    num_stds: z.number(),
    stds_condylomatosis: z.number(),
    stds_cervical_condylomatosis: z.number(),
    stds_hiv: z.number(),
    stds_hpv: z.number(),
    dx_cin: z.number(),
    dx_hpv: z.number(),
});
