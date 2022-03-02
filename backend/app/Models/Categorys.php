<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorys extends Model
{
    use HasFactory;

    public function posts(){
        return $this->hasMany('\App\Models\Posts')->get();
    }
}
