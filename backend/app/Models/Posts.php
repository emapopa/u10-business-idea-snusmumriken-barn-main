<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    use HasFactory;

    public function users(){
        return $this->belongsTo('\App\Models\User')->first();
    }


    public function categorys(){
        return $this->belongsTo('\App\Models\Categorys')->first();
    }

    public function comments(){
        return $this->hasMany('\App\Models\Comments')->get();
    }

}
