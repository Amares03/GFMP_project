<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class types_of_product_purchased extends Model
{
    use HasFactory;
    protected $fillable =[
        'glen_forest_memorial_park',
        'chemhute_park',
        'matidoda_park',
        'single_unit',
        'double_unit',
        'triple_unit',
        'family_close',
        'other_detail'
    ];
}
