<?php

namespace Database\Factories;

use App\Models\Snus;
use App\Models\Flavours;
use Illuminate\Database\Eloquent\Factories\Factory;

class SnusFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Snuses::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $types = [
            'LÖS',
            'PORTION',
            'WHITE PORTION',
            'TOBAKSFRI',
            'NIKOTINFRI'
        ];
        
        return [
            'name' => $this->faker->cityPrefix(),
            'type' => $types[rand(0,4)],
            'strength' => $this->faker->numberBetween($min = 1, $max = 5),
            'flavours_id' => \App\Models\Flavours::inRandomOrder()->value('id'),
        ];
    }
}
