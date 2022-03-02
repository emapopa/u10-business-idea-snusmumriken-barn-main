<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSnusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('snuses', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('type');
            $table->integer('strength');
            $table->string('img_url')->default('https://swedishmatch.cdn.storm.io/131a4ba4-41f9-4ddb-a63d-f9e6843189f7.jpg?format=png&w=250&h=250');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('snuses');
    }
}
