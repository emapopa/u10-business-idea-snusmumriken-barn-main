<?php

namespace Database\Seeders;

use App\Models\Categorys;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $categorys = [
            'GÖR EGET SNUS',
            'MATCHA SNUS MED KÄK Å DRYCK',
            'ODLA TOBAK',
            'SNUSTIPSET',
            'TOBAKSFRITT SNUS',
            'ÖVRIGT'
        ];
        $flavours = [
            'Tall',
            'Gran',
            'Mint',
            'Bär',
            'Frukt',
            'Kaffe',
            'Choklad',
            'Laktris',
            'Geranium',
            'Bergamott',
            'Örter',
            'Citrus',
            'Rök',
            'Cognac'
        ];
        \App\Models\User::factory(10)->create();
        foreach($flavours as $flavour){
            \App\Models\Flavours::create([
                'flavour_type' => $flavour
            ]);
        };
        
        \App\Models\Snuses::factory(10)->create();
        \App\Models\Reviews::factory(50)->create();
        foreach($categorys as $category){
            \App\Models\Categorys::create([
                'category' => $category
            ]);
        };

        \App\Models\Posts::factory(20)->create();
        \App\Models\Comments::factory(50)->create();
        \App\Models\Favourites::factory(10)->create();
    }
}