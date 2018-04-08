<template>
    <div>
        <h2>
            <span v-if="user.id > 0">Edit User</span>
            <span v-else>New User</span>
            <router-link class="btn btn-sm btn-success pull-right" :to="'/users'"> <span class="glyphicon glyphicon-arrow-left"></span> <span>Go to Users</span></router-link>
        </h2>

        <div class="space-5"></div>

        <form class="form-horizontal">
            <div class="form-group">
                <label for="firstName" class="col-sm-2 control-label">First Name</label>
                <div class="col-sm-6">
                    <input class="form-control" v-model="user.firstName" placeholder="first name">
                </div>
            </div>
            <div class="form-group">
                <label for="lastName" class="col-sm-2 control-label">Last Name</label>
                <div class="col-sm-6">
                    <input class="form-control" v-model="user.lastName" placeholder="last name">
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="button" v-on:click="saveUser" class="btn btn-primary">Save</button>
                </div>
            </div>
        </form>

    </div>
</template>

<script src="./user.ts"></script>
