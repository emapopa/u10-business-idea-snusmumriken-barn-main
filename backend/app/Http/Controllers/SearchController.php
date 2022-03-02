<?php

namespace App\Http\Controllers;

use App\Models\Flavours;
use App\Models\Snuses;
use Illuminate\Http\Request;

class SearchController extends Controller
{

    public function search($key) {
        $flavours = Flavours::query() //gets all flavours similar to the search query
        ->where('flavour_type', 'LIKE', "%{$key}%")
        ->get();
        $snuses = Snuses::query() //gets all snuses similar to the search query
        ->where('name', 'LIKE', "%{$key}%")
        ->orWhere('type', 'LIKE', "%{$key}%")
        ->get();

        
        foreach($flavours as $flavour){ 
            $relatedSnus = Snuses::where('flavours_id', $flavour->id)->get(); //gets alls snuses with flavours that matched the query
            $snuses = $snuses->merge($relatedSnus);  //merges both arrays of snuses into one
        }
        foreach($snuses as $snus){ //adds the name of flavours to each snus
            $snus->flavour_name = Flavours::where('id', $snus->flavours_id)->first()->flavour_type; 
        }

        return ['snuses' => $snuses];
    }
}
