<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Snuses extends Model
{
    use HasFactory;

    public function flavours(){
        return $this->hasMany('\App\Models\Flavours')->get();
    }

    public function reviews(){
        return $this->hasMany('\App\Models\Reviews')->get();
    }
    public function avgRating(){
        return $this->hasMany('\App\Models\Reviews')->where('snuses_id', $this->id)->avg('rating');
    }
}