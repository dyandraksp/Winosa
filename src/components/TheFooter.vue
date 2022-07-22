<template>
  <!-- Footer -->
  <MDBFooter bg="dark" :text="['white']">
    <!-- Grid container -->
    <MDBContainer class="p-4">
      <section class="">
        <!--Grid row-->
        <MDBRow>
          <!--Grid column-->
          <MDBCol lg="3" md="6" class="mb-4 mb-md-0">
            <h5 class="text-uppercase">WINOSA</h5>
            <p style="text-align: left;">Menjadi salah satu perusahaan penyedia jasa
              konsultan dan pengembangan bisnis di bidang IT
              yang terpercaya untuk memberikan solusi yang
              inovatif dan mampu bersaing dalam skala
              nasional dan internasional</p>
          </MDBCol>
          <!--Grid column-->
          <!--Grid column-->
          <MDBCol lg="3" md="6" class="mb-4 mb-md-0">
            <h5 class="text-uppercase">HOME</h5>
            <ul class="list-unstyled mb-0">
              <li>
                <a href="#!" class="text-white">About</a>
              </li>
              <li>
                <a href="#!" class="text-white">Partners</a>
              </li>
              <li>
                <a href="#!" class="text-white">Career</a>
              </li>
              <li>
                <a href="#!" class="text-white">Contact</a>
              </li>
            </ul>
          </MDBCol>
          <!--Grid column-->
          <!--Grid column-->
          <MDBCol lg="3" md="6" class="mb-4 mb-md-0">
            <h5 class="text-uppercase">PORTFOLIO</h5>
            <ul class="list-unstyled mb-0">
              <li>
                <a href="#!" class="text-white">Xdemia</a>
              </li>
              <li>
                <a href="#!" class="text-white">Truexess</a>
              </li>
              <li>
                <a href="#!" class="text-white">Crowdpie</a>
              </li>
              <li>
                <a href="#!" class="text-white">Novimix</a>
              </li>
            </ul>
          </MDBCol>
          <!--Grid column-->
          <!--Grid column-->
          <MDBCol lg="3" md="6" class="mb-4 mb-md-0">
            <h5 class="text-uppercase">CONTACT</h5>
            <ul class="list-unstyled mb-0">
              <li>alamat</li>
              <li>info@winosa.id</li>
              <li>085839261747</li>
            </ul>
          </MDBCol>
          <!--Grid column-->
        </MDBRow>
        <!--Grid row-->
      </section>
      <!-- Section: Links -->
    </MDBContainer>
    <!-- Grid container -->
    <!-- Copyright -->
    <div
      class="text-center p-3"
      style="background-color: rgba(0, 0, 0, 0.2)"
    >
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/"
        >MDBootstrap.com</a
      >
    </div>
    <!-- Copyright -->
  </MDBFooter>
  <!-- Footer -->
</template>
<script>
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-vue-ui-kit'
export default {
  components: {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol
  }
}
</script>
<style>
li{
  text-align: left;
}
h5{
  color: #FDC03A;
  text-align: left;
}
</style>
