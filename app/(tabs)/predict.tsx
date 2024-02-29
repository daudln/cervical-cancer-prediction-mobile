import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
Button,
Form,
H2,
ScrollView,
Separator,
Spinner,
Theme,
YStack
} from 'tamagui';
import { AlertDialogBox } from '~/components/alert';
import FormInput from '~/components/form-input';
import { predictionInputSchema } from '~/schema/prediction-input';

export default function TabTwoScreen() {
  const {
    control,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(predictionInputSchema),
    mode: 'onBlur',
  });

  const [status, setStatus] = useState<'off' | 'submitting' | 'submitted'>('off');

  useEffect(() => {
    if (status === 'submitting') {
      const timer = setTimeout(() => setStatus('off'), 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [status]);

  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center" mt="$8">
        <H2>Predictions</H2>

        <Form onSubmit={handleSubmit((d) => console.log(d))} w={'100%'}>
          <ScrollView space="$2" px="$2" py="$2" scrollIndicatorInsets={{ right: 1 }} >
            <FormInput control={control} name={'age'} placeholder="Age" otherProps={{ keyboardType: 'numeric' }} />
            <FormInput
              control={control}
              name={'number_of_sexual_partners'}
              placeholder="Number of Sexual Partners"
            />
            <FormInput
              control={control}
              name={'first_sexual_intercourse'}
              placeholder="First Sexual Intercourse"
              
            />
            <FormInput
              control={control}
              name={'number_of_pregnancies'}
              placeholder="Number of Pregnancies"
            />
            <FormInput control={control} name={'smokes_years'} placeholder="Smoking Years" />
            <FormInput
              control={control}
              name={'hormonal_contraceptives_years'}
              placeholder="Hormonal Contraceptives Years"
            />
            <FormInput control={control} name={'iud_years'} placeholder="IUD Years" />
            <FormInput control={control} name={'num_stds'} placeholder="Number of STDs" />
            <FormInput
              control={control}
              name={'stds_condylomatosis'}
              placeholder="STDs Condylomatosis"
            />
            <FormInput
              control={control}
              name={'stds_cervical_condylomatosis'}
              placeholder="STDs Cervical Condylomatosis"
            />
            <FormInput control={control} name={'stds_hiv'} placeholder="STDs HIV" />
            <FormInput control={control} name={'stds_hpv'} placeholder="STDs HPV" />
            <FormInput control={control} name={'dx_cin'} placeholder="DX CIN" />
            <FormInput control={control} name={'dx_hpv'} placeholder="DX HPV" />

            <YStack space="$2" mb="$5">
              <Form.Trigger asChild disabled={status !== 'off'}>
                <Button
                  backgroundColor={'$blue10'}
                  w={'100%'}
                  textAlign="center"
                  letterSpacing="$11"
                  fontSize={18}
                  color={'white'}
                  fontWeight={'600'}
                  onPress={handleSubmit((d) => console.log(d))}
                  icon={status === 'submitting' ? () => <Spinner /> : undefined}>
                  Submit
                </Button>
              </Form.Trigger>

              <AlertDialogBox />
            </YStack>
          </ScrollView>
        </Form>
        <Separator />
      </YStack>
    </Theme>
  );
}
