<?php

namespace Database\Factories;

use App\Models\Flavours;
use Illuminate\Database\Eloquent\Factories\Factory;

class FlavoursFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Flavours::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        
        return [
            'flavour_type' => $this->faker->colorName(),
        ];
    }
}