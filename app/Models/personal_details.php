<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class personal_details extends Model
{
    use HasFactory;
    protected $fillable =[
        'surname',
        'first_name',
        'date',
        'martial_status',
        'name_of_spouse',
        'physical_address',
        'postal_address',
        'employer',
        'occupation',
        'tel_no_home',
        'cell',
        'tel_no_business',
        'email'
    ];
}
