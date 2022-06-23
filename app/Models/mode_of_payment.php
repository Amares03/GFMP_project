<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class mode_of_payment extends Model
{
    use HasFactory;
    protected $fillable =[
        '3_months',
        '6_months',
        'amount_of_initial_disposal'
    ];
}
