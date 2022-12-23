<template>
  <v-app id="verification">
    <v-main id="verification-content">
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

      <div class="window-content divcol" style="gap: 2em; --width: min(100%, 37em)">
        <h2 class="p">VERIFICACIÓN DE IDENTIDAD</h2>
        
        <v-card class="card divcol" style="gap: 15px">
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

          <div class="divcol" style="gap: 10px">
            <div class="container-label">
              <label for="photo-document" class="aend">Foto de Documento
                <span>(ambos lados)</span>
              </label>
            </div>
            
            <div class="fwrap" style="gap: 15px; --fb: 117px">
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
          
          <div class="divcol" style="gap: 10px">
            <div class="container-label">
              <label for="face-identity" class="aend">Identificación Facial
                <span>(Foto nítida donde se vea tu cara y un papel con la fecha de hoy y la palabra “InfinityBlocks” escrito en él)</span>
              </label>
            </div>
            
            <div class="center">
              <v-file-input
                id="face-identity"
                v-model="formIdentity.faceIdentity"
                solo hide-details
                prepend-icon=""
                :rules="rules.required"
                class="face-identity"
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

          <div class="divcol" style="gap: 5px">
            <label for="wallet_direction">Dirección de Billetera</label>
            <v-text-field
              id="wallet_direction"
              v-model="formIdentity.wallet_direction"
              append-icon="mdi-chevron-down"
              solo hide-details
              :rules="rules.required"
            ></v-text-field>
          </div>

          <v-btn class="btn align" style="--bg: var(--active)" @click="sendRequest()">
            Enviar Información
          </v-btn>
        </v-card>
        
        <h2 class="p" style="--fs: max(16px, 2em)">VERIFICACIÓN DE BILLETERA</h2>
        
        <v-card class="card divcol center tcenter" style="gap: 16px">
          <ul>
            <li>1. Descarga el formulario de verificación que encontrarás en el botón a continuación.</li>
            <li>2. Rellénalo por completo y envíalo a la dirección <a>verificacion@infinityblocks.tech</a></li>
            <li>3. Una vez aprobada tu solicitud de verificación recibirás un email de confirmación.</li>
          </ul>

          <v-btn
            class="btn" style="--fs: max(15px, 1.2em); --bg: var(--active); --p: .3em .5em"
            @click="downloadForm()">
            Descargar Formulario
          </v-btn>
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
    const title = 'Account Verification';
    return {
      title,
    }
  },
  methods: {
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
