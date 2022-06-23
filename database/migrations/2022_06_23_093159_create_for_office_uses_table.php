<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('for_office_uses', function (Blueprint $table) {
            $table->id();
            $table->string('application');
            $table->string('payment_period');
            $table->int('cash');
            $table->int('3_months');
            $table->int('6_months');
            $table->string('other');
            $table->string('monthly_instalment');
            $table->string('authorized_signatory');
            $table->string('plot_number');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('for_office_uses');
    }
};
