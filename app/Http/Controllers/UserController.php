<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::select('id', 'username', 'name', 'email')->where('role', '!=', 'admin')->get();
        return Inertia::render('Master/User', [
            'users' => $users
        ]);
    }
}
