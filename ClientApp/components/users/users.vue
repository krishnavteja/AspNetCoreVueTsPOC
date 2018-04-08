<template>
    <div>
        <h2>
            <span>Users</span>
            <router-link class="btn btn-sm btn-success pull-right" :to="'/user'"><span class="glyphicon glyphicon-plus"></span> <span>Add New User</span></router-link>
        </h2>

        <p v-if="!users"><em>Loading...</em></p>
        <table class="table" v-if="users">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users">
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td>
                        <router-link class="btn btn-sm btn-primary" :to="{ name: 'edituser', params: { id: user.id }}">Select</router-link>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script src="./users.ts"></script>
