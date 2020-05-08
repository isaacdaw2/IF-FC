<?php

namespace App\Form;

use App\Entity\Jugadores;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class JugadoresType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('categoria', ChoiceType::class, [
                'choices'  => [
                    'Veterano' => 'Veterano',
                    'Aficionado' => 'Aficionado',
                    'Juvenil' => 'Juvenil',
                    'Cadete' => 'Cadete',
                    'Infantil' => 'Infantil',
                ],
            ])
            ->add('talla_camiseta', ChoiceType::class, [
                'choices'  => [
                    'XL' => 'XL',
                    'L' => 'L',
                    'M' => 'M',
                    'S' => 'S',
                    'XS' => 'XS',
                ],
            ])
            ->add('talla_pantalon', ChoiceType::class, [
                'choices'  => [
                    'XL' => 'XL',
                    'L' => 'L',
                    'M' => 'M',
                    'S' => 'S',
                    'XS' => 'XS',
                ],
            ])
            ->add('talla_medias', ChoiceType::class, [
                'choices'  => [
                    'XL' => 'XL',
                    'L' => 'L',
                    'M' => 'M',
                    'S' => 'S',
                    'XS' => 'XS',
                ],
            ])
            ->add('talla_abrigo', ChoiceType::class, [
                'choices'  => [
                    'XL' => 'XL',
                    'L' => 'L',
                    'M' => 'M',
                    'S' => 'S',
                    'XS' => 'XS',
                ],
            ])
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
            'data_class' => Jugadores::class,
        ]);
    }
}
