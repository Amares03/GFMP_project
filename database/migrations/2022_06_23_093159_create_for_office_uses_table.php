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
            $table->string('application',200);
            $table->string('payment_period',200);
            $table->tinyInteger('cash');
            $table->tinyInteger('months_3');
            $table->tinyInteger('months_6');
            $table->string('other',100);
            $table->string('monthly_instalment',200);
            $table->string('authorized_signatory',200);
            $table->integer('plot_number');
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
