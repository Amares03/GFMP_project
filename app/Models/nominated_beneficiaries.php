<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class nominated_beneficiaries extends Model
{
    use HasFactory;
    protected $fillable =[
        'name',
        'age',
        'relationship'
    ];
}
