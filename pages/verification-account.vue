<template>
  <v-app id="verification" class="account">
    <v-main id="verification-content">
      <div id="verification-content--button-back" class="center">
        <v-btn
          id="go-back"
          class="btn"
          style="--min-w: max-content; --p: .2em; --br: 50%"
          @click="$router.go(-1)">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        
        <label for="go-back" class="hspan" style="--fw: 500">Go back</label>
      </div>

      <div class="window-content divcol" style="gap: 2em; --width: min(100%, 37em)">
        <h2 class="p">VERIFICACIÓN DE IDENTIDAD</h2>
        
        <v-form ref="formIdentity" class="card divcol" style="gap: 15px" @submit.prevent="sendRequest()">
          <div class="divcol" style="gap: 5px">
            <label for="type">Tipo de Documento</label>
            <v-select
              id="type"
              v-model="formIdentity.tipoDocumento"
              :items="documentTypes"
              append-icon="mdi-chevron-down"
              solo hide-details
              :rules="rules.required"
              :menu-props="{contentClass: 'desplegableMenuVerificationAccount'}"
            ></v-select>
          </div>

          <div class="divcol" style="gap: 10px">
            <div class="container-label">
              <label for="photo-document" class="aend">Foto de Documento
                <span v-if="formIdentity.tipoDocumento !== 'pasaporte'">(ambos lados)</span>
              </label>
            </div>
            
            <div class="fwrap" style="gap: 15px; --fb: 117px">
              <v-file-input
                id="photo-document"
                v-model="formIdentity.fotoFrente"
                solo hide-details
                prepend-icon=""
                :rules="rules.required"
                @change="imagePreview('documentFrontImg', formIdentity.fotoFrente)"
              >
                <template #selection>
                  <img :src="documentFrontImg" alt="image preview" style="--w: 100%; --h: 100%; --of: cover">
                </template>
                
                <template #label>
                  <span class="hspan">Frente</span>
                  <img src="~/assets/sources/icons/photo-label.svg" alt="add photo">
                </template>
              </v-file-input>
              
              <v-file-input
                v-if="formIdentity.tipoDocumento !== 'pasaporte'"
                id="photo-document"
                v-model="formIdentity.fotoReverso"
                solo hide-details
                prepend-icon=""
                :rules="rules.required"
                @change="imagePreview('documentBackImg', formIdentity.fotoReverso)"
              >
                <template #selection>
                  <img :src="documentBackImg" alt="image preview" style="--w: 100%; --h: 100%; --of: cover">
                </template>
                
                <template #label>
                  <span class="hspan">Reverso</span>
                  <img src="~/assets/sources/icons/photo-label.svg" alt="add photo">
                </template>
              </v-file-input>
            </div>
          </div>
          
          <div class="divcol" style="gap: 10px">
            <div class="container-label">
              <label for="face-identity" class="aend">Identificación Facial
                <span>(Foto nítida donde se vea tu cara y un papel con la fecha de hoy y la palabra “InfinityBlocks” escrito en él)</span>
              </label>
            </div>
            
            <div class="center">
              <v-file-input
                id="face-identity"
                v-model="formIdentity.fotoFacial"
                solo hide-details
                prepend-icon=""
                :rules="rules.required"
                @change="imagePreview('faceIdentityImg', formIdentity.fotoFacial)"
              >
                <template #selection>
                  <img :src="faceIdentityImg" alt="image preview" style="--w: 100%; --h: 100%; --of: cover">
                </template>
                
                <template #label>
                  <span class="hspan">Foto</span>
                  <img src="~/assets/sources/icons/photo-label.svg" alt="add photo">
                </template>
              </v-file-input>
            </div>
          </div>

          <div class="divcol" style="gap: 5px">
            <label for="wallet_address">Dirección de Billetera</label>
            <v-text-field
              id="wallet_address"
              v-model="formIdentity.walletAddress"
              solo hide-details
              :rules="rules.walletAddress"
              @keyup="$event => $event.key === 'enter' ? sendRequest() : ''"
            ></v-text-field>
          </div>

          <v-btn
            :disabled="!$refs.formIdentity?.validate() || loadingBtnIdentity"
            class="btn align" style="--bg: var(--active)"
            :loading="loadingBtnIdentity" @click="sendRequest()"
          >Enviar Información</v-btn>
        </v-form>
        
        <h2 class="p" style="--fs: max(16px, 2em)">VERIFICACIÓN DE BILLETERA</h2>
        
        <v-card class="card divcol center tcenter" style="gap: 16px">
          <ul>
            <li>1. Descarga el formulario de verificación que encontrarás en el botón a continuación.</li>
            <li>2. Rellénalo por completo y envíalo a la dirección <a>verificacion@infinityblocks.tech</a></li>
            <li>3. Una vez aprobada tu solicitud de verificación recibirás un email de confirmación.</li>
          </ul>

          <v-btn
            :disabled="!approved || loadingBtnDownload"
            class="btn" style="--fs: max(15px, 1.2em); --bg: var(--active); --p: .3em .5em"
            :loading="loadingBtnDownload" @click="downloadForm()">Descargar Formulario</v-btn>
        </v-card>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "VerificationAccountPage",
  mixins: [computeds],
  layout: "empty-layout",
  data() {
    return {
      documentTypes: ["pasaporte", "documento de identificación nacional", "licencia de conducir"],
      formIdentity: {
        tipoDocumento: undefined,
        fotoFrente: undefined,
        fotoReverso: undefined,
        fotoFacial: undefined,
        walletAddress: undefined,
      },
      documentFrontImg: undefined,
      documentBackImg: undefined,
      faceIdentityImg: undefined,
      loadingBtnIdentity: undefined,
      loadingBtnDownload: undefined,
      verificationId: undefined,
      approved: undefined,
    }
  },
  head() {
    const title = 'Account Verification';
    return {
      title,
    }
  },
  mounted() {
    this.getDataIdentity()
  },
  methods: {
    imagePreview(image, url) {
      if (url) this[image] = URL.createObjectURL(url)
    },
    downloadForm() {
      console.log("download")
    },
    getDataIdentity() {
      // get verification endpoint
      this.$axios.get(`${this.baseDomainUrl}/verificacion/${this.uid}`).then(result => {
        console.info("<<--get data-->>", result.data) // console

        this.verificationId = result.data.id
        this.approved = result.data.aprobado

        // set data form
        this.$equalData(this.formIdentity, result.data)
        this.formIdentity.tipoDocumento = this.formIdentity.tipoDocumento.toLowerCase()

        // enable download button if approved
        this.downloadBtn = result.data.aprobado
      }).catch(err => console.error(err, err.response.data.errors ?? err.response.data.title))
    },
    sendRequest() {
      if (!this.$refs.formIdentity.validate()) return this.$alert("cancel", {desc: "verifica que los campos sean correctos"});
      this.loadingBtnIdentity = true

      const data = {
        userId: this.uid,
        ...this.formIdentity
      }
      data.tipoDocumento = this.documentTypes.findIndex(doc => doc === data.tipoDocumento) + 1

      this.$axios.post(`${this.baseDomainUrl}/verificacion`, this.$formData(data))
      .then(result => {
        console.info("<<--identity form-->>", result.data) // console
        this.loadingBtnIdentity = false
        
        const timeout = 5000
        setTimeout(() => this.$router.push(this.localePath("/profile")), timeout);
        
        this.$alert("success", {
          title: "validacion exitosa",
          desc: "El proceso de validación puede tardar unos cuantos minutos o días",
          timeout,
        })
      }).catch(err => {
        console.error(err, err.response.data.errors ?? err.response.data.title)
        this.loadingBtnIdentity = false
        this.$alert("cancel", {desc: err.message})
      })
    },
  }
};
</script>

<style src="~/assets/styles/pages/verification.scss" lang="scss" />
