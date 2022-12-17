<template>
  <v-app id="verification">
    <v-main>
      <v-window id="verification-content" v-model="windowStep">
        <!-- <div class="center" style="position: absolute; top: 0; left: 0">
          <v-btn
            id="go-back"
            class="btn"
            style="--min-w: max-content; --p: .2em; --br: 50%"
            @click="$router.go(-1)">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          
          <label for="go-back" class="hspan" style="--fw: 500">Go back</label>
        </div> -->

        <v-window-item :value="1">
          <div class="window-content divcol center tcenter" style="gap: 2em">
            <img src="~/assets/sources/logos/logo-login.svg" alt="logo" style="--w: max(150px, 18em)">

            <div class="divcol center" style="gap: 1em; margin-top: 7.5em">
              <p class="p hspan" style="--fs: max(16px, 1.8em); --fw: 500">
                Hemos enviado un código de verificación a tu correo electrónico 
                <span style="--fw: 800; font-style: italic">pedroperez@gmail.com</span>
              </p>

              <v-otp-input
                v-model="otp"
                length="5"
                type="number"
              ></v-otp-input>

              <v-btn class="btn" style="--fs: max(13px, 1.6em)" @click="verificationCode()">
                VERIFICAR
              </v-btn>
            </div>

            <div class="divcol" style="gap: 1em;">
              <a class="hspan" style="text-decoration: underline; --fs: max(16px, 1.6em); --fw: 800">Reenviar Código</a>
              <span class="hspan" style="opacity: .8; --fs: max(14px, 1.1em)">No olvides revisar tu bandeja de SPAM</span>
            </div>
          </div>
        </v-window-item>

        <v-window-item :value="2">
          <div class="window-content divcol" style="gap: 2em; --width: min(100%, 37em)">
            <h2 class="p">VERIFICACIÓN DE IDENTIDAD</h2>
            
            <v-card class="card divcol" style="gap: 10px">
              <div class="divcol" style="gap: 5px">
                <label for="type">Tipo de Documento</label>
                <v-select
                  id="type"
                  v-model="formIdentity.type"
                  :items="documentTypes"
                  append-icon="mdi-chevron-down"
                  solo hide-details
                  :rules="rules.required"
                ></v-select>
              </div>

              <div class="divcol" style="gap: 5px">
                <div class="container-label">
                  <label for="photo-document" class="aend">Foto de Documento
                    <span>(ambos lados)</span>
                  </label>
                </div>
                <div class="fwrap" style="gap: 15px">
                  <v-file-input
                    id="photo-document"
                    v-model="formIdentity.documentFront"
                    solo hide-details
                    prepend-icon=""
                    :rules="rules.required"
                    @change="imagePreview('documentFrontImg', formIdentity.documentFront)"
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
                    id="photo-document"
                    v-model="formIdentity.documentBack"
                    solo hide-details
                    prepend-icon=""
                    :rules="rules.required"
                    @change="imagePreview('documentBackImg', formIdentity.documentBack)"
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
              
              <div class="divcol" style="gap: 5px">
                <div class="container-label">
                  <label for="face-identity" class="aend">Identificación Facial
                    <span>(Foto nitida de la persona con documento en mano)</span>
                  </label>
                </div>
                <div class="center">
                  <v-file-input
                    id="face-identity"
                    v-model="formIdentity.faceIdentity"
                    solo hide-details
                    prepend-icon=""
                    :rules="rules.required"
                    @change="imagePreview('faceIdentityImg', formIdentity.faceIdentity)"
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
            </v-card>
            
            <h2 class="p" style="--fs: max(16px, 2em)">VERIFICACIÓN DE BILLETERA</h2>
            
            <v-card class="card divcol center tcenter" style="gap: 16px">
              <ul>
                <li>1. Descarga el formulario de verificación que encontrarás en el botón a continuación.</li>
                <li>2. Rellénalo por completo y énvialo a la dirección <a>verificacion@infinityblocks.tech</a></li>
                <li>3. Una vez aprobada tu solicitud de verificación recibirás un email de confirmación.</li>
              </ul>

              <v-btn
                class="btn" style="--fs: max(15px, 1.2em); --bg: var(--active); --p: .3em .5em"
                @click="downloadForm()">
                Descargar Formulario
              </v-btn>
            </v-card>

            <v-btn class="btn align" @click="sendRequest()">
              Enviar solicitud
            </v-btn>
          </div>
        </v-window-item>
      </v-window>
    </v-main>
  </v-app>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "VerificationPage",
  mixins: [computeds],
  layout: "empty-layout",
  data() {
    return {
      windowStep: 1,
      otp: undefined,
      documentTypes: ["lorem ipsum", "lorem", "ipsum"],
      formIdentity: {
        type: undefined,
        documentFront: undefined,
        documentBack: undefined,
        faceIdentity: undefined,
      },
      documentFrontImg: undefined,
      documentBackImg: undefined,
      faceIdentityImg: undefined,
    }
  },
  head() {
    const title = 'verification';
    return {
      title,
    }
  },
  methods: {
    verificationCode() {
      if (!(this.otp?.length === 5)) return;
      this.windowStep = 2
    },
    imagePreview(image, url) {
      if (url) this[image] = URL.createObjectURL(url)
    },
    downloadForm() {
      console.log("download")
    },
    sendRequest() {
      console.log("request")
      this.$router.push(this.localePath("/"))
    },
  }
};
</script>

<style src="~/assets/styles/pages/verification.scss" lang="scss" />
