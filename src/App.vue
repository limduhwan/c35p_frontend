<template>
  <div id="app">
      <nav class="navbar navbar-default col-lg-11"
           style="float:none;margin: 0px auto 50px auto;width:90.2%">
        <div class="container-fluid">
          <!-- Brand and toggsle get grouped for better mobile display -->
          <div class="navbar-header">

            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="ssr-only"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" :style="style.navBrand">
<!--              <img :style="style.actlogo" src="../static/act-transparent-30.png"/>-->
              <b>TongBo-BooKs</b>
            </a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <b :style="style.navFont">
              <ul class="nav navbar-nav">
                <li id="btnBookList" v-bind:class="{active:isList}" @click="selectNav">
                  <router-link to="/booklist">목록조회</router-link>
                </li>
                <li id="btnBookRequest" v-bind:class="{active:isRequest}" @click="selectNav">
                  <router-link to="/bookrequest">도서신청</router-link>
                </li>
                <li id="btnRequestList" v-bind:class="{active:isRequestList}" @click="selectNav">
                  <router-link to="/bookrequestlist">신청내역</router-link>
                </li>
              </ul>
            </b>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>

    <div class="container col-lg-11" style="float: none" >
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isList : false,
      isRequest: false,
      isRequestList: false,
      style : {
        actlogo : {
          display: 'inline-block',
          width: '15%',
          verticalAlign: 'sub'
        },
        navBrand : {
          color: '#ab5656',
          verticalAlign: 'center'
        },
        navFont : {
          fontSize: '15px'
        }
      }
    }
  },
  methods: {
    selectNav: function(e) {
        if(e.target.pathname === '/booklist'){
          this.isList = true;
          this.isRequest = false;
          this.isRequestList = false;
        }else if(e.target.pathname === '/bookrequest'){
          this.isRequest = true;
          this.isList = false;
          this.isRequestList = false;
        }else if(e.target.pathname === '/bookrequestlist'){
          this.isRequest = false;
          this.isList = false;
          this.isRequestList = true;
        }
    }
  },
  created: function(){
    if(this.$route.path === '/booklist' || this.$route.path === '/'){
      this.isList = true;
    }else if(this.$route.path === '/bookrequest'){
      this.isRequest = true;
    }else if(this.$route.path === '/bookrequestlist'){
      this.isRequestList = true;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
