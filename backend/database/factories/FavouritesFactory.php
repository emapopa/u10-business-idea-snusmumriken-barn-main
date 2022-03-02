<?php

namespace Database\Factories;

use App\Models\Favourites;
use Illuminate\Database\Eloquent\Factories\Factory;

class FavouritesFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Favourites::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'users_id' => \App\Models\User::inRandomOrder()->value('id'),
           'flavours_id' => \App\Models\Flavours::inRandomOrder()->value('id'),
        ];
    }
}