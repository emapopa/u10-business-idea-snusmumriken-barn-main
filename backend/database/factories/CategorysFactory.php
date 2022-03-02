<?php

namespace Database\Factories;

use App\Models\Categorys;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategorysFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Categorys::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'category' => $this->faker->jobTitle(),
        ];
    }
}
