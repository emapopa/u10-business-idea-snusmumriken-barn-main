<?php

namespace Database\Factories;

use App\Models\Reviews;
use App\Models\User;
use App\Models\Snus;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReviewsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Reviews::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->name(),
            'body' => $this->faker->text($maxNbChars = 200),
            'rating' => $this->faker->numberBetween($min = 0, $max = 5),
            'users_id' => \App\Models\User::inRandomOrder()->value('id'),
            'snuses_id' => \App\Models\Snuses::inRandomOrder()->value('id'),
        ];
    }
}
