<template>
        <div class="row row-space-20">
            <div class="col-md-8">
                <div class="tab-content p-0">

                    <div class="tab-pane fade active show" id="profile-friends">
                        <div class="m-b-10"><b>Friend List (4)</b></div>

                        <ul class="friend-list clearfix">
                            <li>
                                <a href="#">
                                    <div class="friend-img"><img src="../assets/login.png" alt="" /></div>
                                    <div class="friend-info">
                                        <h4>Sancho Aldo</h4>
                                        <p>392 friends</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="friend-img"><img src="../assets/login.png" alt="" /></div>
                                    <div class="friend-info">
                                        <h4>Jonty Augusto</h4>
                                        <p>128 friends</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="friend-img"><img src="../assets/login.png" alt="" /></div>
                                    <div class="friend-info">
                                        <h4>Androkles Allen</h4>
                                        <p>12 friends</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="friend-img"><img src="../assets/login.png" alt="" /></div>
                                    <div class="friend-info">
                                        <h4>Ithamar Silvio</h4>
                                        <p>1,923 friends</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="friend-img"><img src="../assets/login.png" alt="" /></div>
                                    <div class="friend-info">
                                        <h4>Denzel Annas</h4>
                                        <p>893 friends</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="friend-img"><img src="../assets/login.png" alt="" /></div>
                                    <div class="friend-info">
                                        <h4>Kamil Cree</h4>
                                        <p>983 friends</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'Friends',
  components: {
    
  }
}
</script>

<style>

@media (max-width: 767px) {

    .friend-list > li {
        float: none;
        width: auto;
    }
}
.friend-list {
    padding: 0;
}
.friend-list > li {
    float: left;
    width: 50%;
}
.friend-list > li > a {
    display: block;
    text-decoration: none;
    color: #000;
    padding: 0.625rem;
    margin: 1px;
    background: #fff;
}
.friend-list .friend-img {
    float: left;
    width: 3rem;
    height: 3rem;
    overflow: hidden;
    background: #efeff4;
}
.friend-list .friend-info {
    margin-left: 3.625rem;
}
.friend-list .friend-info h4 {
    margin: 0.3125rem 0;
    font-size: 0.875rem;
    font-weight: 600;
}
.friend-list .friend-info p {
    color: #666;
    margin: 0;
}
</style>