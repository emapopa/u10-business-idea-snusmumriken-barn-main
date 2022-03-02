<?php

namespace Database\Factories;

use App\Models\Comments;
use App\Models\User;
use App\Models\Posts;
use Illuminate\Database\Eloquent\Factories\Factory;

class CommentsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Comments::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'body' => $this->faker->text($maxNbChars = 50),
            'users_id' => \App\Models\User::inRandomOrder()->value('id'),
            'posts_id' => \App\Models\Posts::inRandomOrder()->value('id'),
        ];
    }
}
