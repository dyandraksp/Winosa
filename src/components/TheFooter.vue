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
            <p style="text-align: left;">Menjadi salah satu perusahaan <br/>
            penyedia jasa konsultan dan <br/>
            pengembangan bisnis di bidang IT <br/>
            yang terpercaya untuk <br/>
            memberikan solusi yang inovatif <br/>
            dan mampu bersaing dalam skala <br/>
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
              <div class="contact">
              <img src="../assets/icon_location.png" style="width: 19px; height: 25px; margin-right: 24px; margin-top: 6px;" />
              <li>Kartini No.40, Tanjung Karang Pusat 35116 Bandar Lampung, Lampung, Indonesia</li>
              </div>
              <div class="contact">
              <img src="../assets/icon_email.png" style="width: 21px; height: 16px; margin-right: 22px; margin-top: 6px;" />
              <li>info@winosa.id</li>
              </div>
              <div class="contact">
              <img src="../assets/icon_wa.png" style="width: 21px; height: 21px; margin-right: 22px; margin-top: 2px;" />
              <li>085839261747</li>
              </div>
            </ul>
          </MDBCol>
          <!--Grid column-->
        </MDBRow>
        <!--Grid row-->
      </section>
      <!-- Section: Links -->
    </MDBContainer>
    <!-- Grid container -->
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
.contact{
  display: flex;
  padding-bottom: 24px;
}
.text-uppercase{
  padding-bottom: 24px;
}
</style>
