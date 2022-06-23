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
        Schema::create('types_of_product_purchaseds', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger('glen_forest_memorial_park');
            $table->tinyInteger('chemhute_park');
            $table->tinyInteger('matidoda_park');
            $table->tinyInteger('single_unit');
            $table->tinyInteger('double_unit');
            $table->tinyInteger('triple_unit');
            $table->tinyInteger('family_close');
            $table->string('other_detail',200);
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
        Schema::dropIfExists('types_of_product_purchaseds');
    }
};
