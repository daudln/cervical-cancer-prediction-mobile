import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
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
import AlertDialogBox  from '~/components/alert';
import FormInput from '~/components/form-input';
import PredictionInput, { predictionInputSchema } from '~/schema/prediction-input';

import "axios";
import { Alert } from 'react-native';

export default function TabTwoScreen() {
  const {
    control,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(predictionInputSchema),
    mode: 'onBlur',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlertDialog, setShowAlertDialog] = useState(false);

  const callAPI = async (data: PredictionInput) => {
    console.log(data);
    setIsSubmitting(true);
    try {
      const response = await fetch('http://172.17.17.186:8000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      Alert.alert(responseData.prediction);
      setShowAlertDialog(true);
      setIsSubmitting(false);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };
  

  const handleAlertDialogClose = () => {
    setShowAlertDialog(false);
  };

  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center" mt="$8">
        <H2>Predictions</H2>

        <Form onSubmit={handleSubmit(data => callAPI(data as PredictionInput))} w={'100%'}>
          <ScrollView space="$2" px="$2" py="$2" scrollIndicatorInsets={{ right: 1 }} >
            <FormInput control={control} otherProps={{ keyboardType: 'numeric' }} name={'age'} placeholder="Age" />
            <FormInput
              control={control} otherProps={{ keyboardType: 'numeric' }}
              name={'num_sexual_partners'}
              placeholder="Number of Sexual Partners"
            />
            <FormInput
              control={control} otherProps={{ keyboardType: 'numeric' }}
              name={'first_sexual_intercourse'}
              placeholder="First Sexual Intercourse"
              
            />
            <FormInput
              control={control} otherProps={{ keyboardType: 'numeric' }}
              name={'num_pregnancies'}
              placeholder="Number of Pregnancies"
            />
            <FormInput control={control} otherProps={{ keyboardType: 'numeric' }} name={'smoking_years'} placeholder="Smoking Years" />
            <FormInput
              control={control} otherProps={{ keyboardType: 'numeric' }}
              name={'hormonal_contraceptives_years'}
              placeholder="Hormonal Contraceptives Years"
            />
            <FormInput control={control} otherProps={{ keyboardType: 'numeric' }} name={'iud_years'} placeholder="IUD Years" />
            <FormInput control={control} otherProps={{ keyboardType: 'numeric' }} name={'num_stds'} placeholder="Number of STDs" />
            <FormInput
              control={control} otherProps={{ keyboardType: 'numeric' }}
              name={'stds_condylomatosis'}
              placeholder="STDs Condylomatosis"
            />
            <FormInput
              control={control} otherProps={{ keyboardType: 'numeric' }}
              name={'stds_cervical_condylomatosis'}
              placeholder="STDs Cervical Condylomatosis"
            />
            <FormInput control={control} otherProps={{ keyboardType: 'numeric' }} name={'stds_hiv'} placeholder="STDs HIV" />
            <FormInput control={control} otherProps={{ keyboardType: 'numeric' }} name={'stds_hpv'} placeholder="STDs HPV" />
            <FormInput control={control} otherProps={{ keyboardType: 'numeric' }} name={'dx_cin'} placeholder="DX CIN" />
            <FormInput control={control} otherProps={{ keyboardType: 'numeric' }} name={'dx_hpv'} placeholder="DX HPV" />

            <YStack space="$2" mb="$5">
              <Form.Trigger asChild disabled={isSubmitting}>
                <Button
                  backgroundColor={'$blue10'}
                  w={'100%'}
                  textAlign="center"
                  letterSpacing="$11"
                  fontSize={18}
                  color={'white'}
                  fontWeight={'600'}
                  icon={isSubmitting ? () => <Spinner /> : undefined}>
                  Submit
                </Button>
              </Form.Trigger>
            </YStack>
          </ScrollView>
        </Form>
        <Separator />
      </YStack>

      {showAlertDialog && (
        <AlertDialogBox onClose={handleAlertDialogClose}/>
      )}
    </Theme>
  );
}
