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
        '3_months',
        '6_months',
        'other',
        'monthly_instalment',
        'authorized_signatory',
        'plot_number'
    ];
}
