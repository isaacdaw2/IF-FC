<?php

namespace App\Form;

use App\Entity\Socios;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SociosType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('metodo_pago', ChoiceType::class, [
                'choices'  => [
                    'PayPal' => 'PayPal',
                    'Tarjeta crédito/débito' => 'Tarjeta crédito/débito',
                    'Domiciliación bancaria' => 'Domiciliación bancaria',
                ],
            ])
            ->add('Enviar', SubmitType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Socios::class,
        ]);
    }
}
