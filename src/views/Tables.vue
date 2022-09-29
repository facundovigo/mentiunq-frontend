<template>
  <div class="container-fluid card-padding py-4 d-xl-none">

      <div v-if="!this.pepe" class="spinerr-collapse d-xl-none">
              <div  class=" spinner-grow text-success m-1 " 
                  style="width: 20rem; height: 20rem; " role="status">
              </div>
      </div> 
      <div v-if="pepe" class="card d-xl-none " style="width: 20rem;">
        <img src="../assets/img/ivana-square.jpg" class="card-img-top" alt="...">
          <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-li">Answer</li>
            <li class="list-group-item"></li>
          </ul>
          <p class="card-text">
                {{data}}
          </p>
        </div>
    </div>
   </div>   


  <div class="container-fluid py-4 d-none d-xxl-block">
    <div class="row">
      <div class="col-12">
        <div  class="card my-4 d-none d-xxl-block">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div
              class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3"
            >
              <h6 class="text-white text-capitalize ps-3">{{name}}</h6>
            </div>
          </div>
          <div class="card-body px-0 pb-2">
            <div class="table-responsive p-0">
              <div v-if="!this.pepe" class="spinerr d-none d-xxl-block">
                <div  class=" spinner-grow text-success m-1 " 
                  style="width: 20rem; height: 20rem; " role="status">
                </div>
              </div> 
              <table v-if="pepe"  class="table align-items-center mb-0 ">
                <thead>
                  <tr>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Person
                    </th>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                    >
                    Question
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Status
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Employed
                    </th>
                    <th class="text-secondary opacity-7"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img
                            src="../assets/img/team-2.jpg"
                            class="avatar avatar-sm me-3 border-radius-lg"
                            alt="user1"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{name}}</h6>
                          <p class="text-xs text-secondary mb-0">
                            {{mail}}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs text-secondary mb-0">{{data}}</p>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm bg-gradient-success"
                        >Ok</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >23/04/18</span
                      >
                    </td>
                    <td class="align-middle">
                      <a
                        href="javascript:;"
                        class="text-secondary font-weight-bold text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img
                            src="../assets/img/team-3.jpg"
                            class="avatar avatar-sm me-3 border-radius-lg"
                            alt="user2"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Alexa Liras</h6>
                          <p class="text-xs text-secondary mb-0">
                            alexa@creative-tim.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs font-weight-bold mb-0">Programator</p>
                      <p class="text-xs text-secondary mb-0">Developer</p>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm bg-gradient-secondary"
                        >Offline</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >11/01/19</span
                      >
                    </td>
                    <td class="align-middle">
                      <a
                        href="javascript:;"
                        class="text-secondary font-weight-bold text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img
                            src="../assets/img/team-4.jpg"
                            class="avatar avatar-sm me-3 border-radius-lg"
                            alt="user3"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Laurent Perrier</h6>
                          <p class="text-xs text-secondary mb-0">
                            laurent@creative-tim.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs font-weight-bold mb-0">Executive</p>
                      <p class="text-xs text-secondary mb-0">Projects</p>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm bg-gradient-success"
                        >Online</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >19/09/17</span
                      >
                    </td>
                    <td class="align-middle">
                      <a
                        href="javascript:;"
                        class="text-secondary font-weight-bold text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img
                            src="../assets/img/team-3.jpg"
                            class="avatar avatar-sm me-3 border-radius-lg"
                            alt="user4"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Michael Levi</h6>
                          <p class="text-xs text-secondary mb-0">
                            michael@creative-tim.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs font-weight-bold mb-0">Programator</p>
                      <p class="text-xs text-secondary mb-0">Developer</p>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm bg-gradient-success"
                        >Online</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >24/12/08</span
                      >
                    </td>
                    <td class="align-middle">
                      <a
                        href="javascript:;"
                        class="text-secondary font-weight-bold text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img
                            src="../assets/img/team-2.jpg"
                            class="avatar avatar-sm me-3 border-radius-lg"
                            alt="user5"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Richard Gran</h6>
                          <p class="text-xs text-secondary mb-0">
                            richard@creative-tim.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs font-weight-bold mb-0">Manager</p>
                      <p class="text-xs text-secondary mb-0">Executive</p>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm bg-gradient-secondary"
                        >Offline</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >04/10/21</span
                      >
                    </td>
                    <td class="align-middle">
                      <a
                        href="javascript:;"
                        class="text-secondary font-weight-bold text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img
                            src="../assets/img/team-4.jpg"
                            class="avatar avatar-sm me-3 border-radius-lg"
                            alt="user6"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Miriam Eric</h6>
                          <p class="text-xs text-secondary mb-0">
                            miriam@creative-tim.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs font-weight-bold mb-0">Programator</p>
                      <p class="text-xs text-secondary mb-0">Developer</p>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm bg-gradient-secondary"
                        >Offline</span
                      >
                    </td>
                    <td class="align-middle tnameext-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >14/09/20</span
                      >
                    </td>
                    <td class="align-middle">
                      <a
                        href="javascript:;"
                        class="text-secondary font-weight-bold text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  import API from '../service/api';
export default {
  name: "tables",
    mounted() {
      this.prueba()
    },
    props: ['post'],
    data(){
      return{
        data: "",
        name:"",
        email:"",
        pepe: false
      }
    },
    methods: {
      prueba(){
        API.get(`/slides/`)
        .then( resp => this.data = resp ,
          this.pepe = !this.pepe,
          this.name = localStorage.getItem('name'),
          this.mail = localStorage.getItem('email'),
          console.log(this.pepe)
        )
          .catch(e => e)

      },
    }    
};
</script>
<style scoped>
.spinerr{
  padding-left: 30% !important;
}

.spinerr-collapse{
  padding-left: 5% !important;
}
.card-padding{
  padding-left: 3rem !important;
}
.card-text {
  font-weight: bold;
  font-size: 1.5rem !important;
  font-style: italic;
}

.text-li {
  font-weight: bold;
  font-size: 1.2rem !important;
  color: black !important


}
</style>
