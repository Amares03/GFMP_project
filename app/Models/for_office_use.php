<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class for_office_use extends Model
{
    use HasFactory;
    protected $fillable =[
        'application',
        'payment_period',
        'cash',
        'months_3',
        'months_6',
        'other',
        'monthly_instalment',
        'authorized_signatory',
        'plot_number'
    ];
}
