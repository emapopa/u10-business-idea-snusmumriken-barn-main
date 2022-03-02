<?php

namespace Database\Factories;

use App\Models\Posts;
use App\Models\User;
use App\Models\Categorys;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Posts::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->text($maxNbChars = 10),
            'body' => $this->faker->text($maxNbChars = 100),
            'users_id' => \App\Models\User::inRandomOrder()->value('id'),
            'categorys_id' => \App\Models\Categorys::inRandomOrder()->value('id'),
        ];
    }
}
