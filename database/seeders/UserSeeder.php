<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                "username" => "admin",
                "name" => "Admin Arie Fajar Bachtiar",
                "email" => "admin@gmail.com",
                "email_verified_at" => null,
                "password" => Hash::make("admin123"),
                "role" => "admin",
                "remember_token" => null,
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "username" => "user",
                "name" => "User Arie Fajar Bachtiar",
                "email" => "user@gmail.com",
                "email_verified_at" => null,
                "password" => Hash::make("user123"),
                "role" => "user",
                "remember_token" => null,
                "created_at" => now(),
                "updated_at" => now(),
            ],
        ];

        foreach ($users as $user) {
            User::create($user);
        }
    }
}
