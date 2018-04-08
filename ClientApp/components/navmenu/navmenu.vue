<template>

    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                    <router-link class="navbar-brand" :to="'/'">
                        <span>VueTSWebAPI</span>
                    </router-link>
            </div>



            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li>
                        <!-- TODO: highlight active link -->
                        <router-link :to="'/users'">
                            <span :class="'glyphicon glyphicon-user'"></span> Users
                        </router-link>
                    </li>
                    <li>
                        <!-- TODO: highlight active link -->
                        <router-link :to="'/'">
                            <span :class="'glyphicon glyphicon-list'"></span> Roles
                        </router-link>
                    </li>


                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown Menu<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                    </li>
                </ul>
                <!--<form class="navbar-form navbar-left">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Search">
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form>-->
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">Link</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </li>
                </ul>
            </div>



            <!-- Collect the nav links, forms, and other content for toggling -->
        </div><!-- /.container-fluid -->
    </nav>

</template>

<style>
    .main-nav li .glyphicon {
        margin-right: 10px;
    }

    /* Highlighting rules for nav menu items */
    .main-nav li a.router-link-active,
    .main-nav li a.router-link-active:hover,
    .main-nav li a.router-link-active:focus {
        background-color: #4189C7;
        color: white;
    }

    /* Keep the nav menu independent of scrolling and on top of other items */
    .main-nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
    }

    @media (min-width: 768px) {
        /* On small screens, convert the nav menu to a vertical sidebar */
        .main-nav {
            height: 100%;
            width: calc(25% - 20px);
        }

            .main-nav .navbar {
                border-radius: 0px;
                border-width: 0px;
                height: 100%;
            }

            .main-nav .navbar-header {
                float: none;
            }

            .main-nav .navbar-collapse {
                border-top: 1px solid #444;
                padding: 0px;
            }

            .main-nav .navbar ul {
                float: none;
            }

            .main-nav .navbar li {
                float: none;
                font-size: 15px;
                margin: 6px;
            }

                .main-nav .navbar li a {
                    padding: 10px 16px;
                    border-radius: 4px;
                }

            .main-nav .navbar a {
                /* If a menu item's text is too long, truncate it */
                width: 100%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
    }
</style>
