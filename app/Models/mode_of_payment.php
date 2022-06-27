<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class mode_of_payment extends Model
{
    use HasFactory;
    protected $fillable =[
        'months_3',
        'months_6',
        'amount_of_initial_disposal'
    ];
}
