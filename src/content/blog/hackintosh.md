---
draft: false
title: "Hackintosh Coffee Lake"
snippet: "Ornare cum cursus laoreet sagittis nunc fusce posuere per euismod dis vehicula a, semper fames lacus maecenas dictumst pulvinar neque enim non potenti. Torquent hac sociosqu eleifend potenti."
image: {
    src: "https://i.postimg.cc/5tXqKQcn/DALL-E-2023-10-17-20-20-24-Ilustraci-n-Una-representaci-n-art-stica-de-una-placa-base-con-el-logo.png",
    alt: "Hackintosh"
}
publishDate: "2023-09-16T19:08:00.000Z"
category: "Tutorial"
author: "René Kuhm"
tags: ["Aprendizaje", "Computación"]
---

# Tutorial de Hackintosh para CPUs Coffee Lake

**Nota**: Antes de comenzar, hay que entender que hacer un Hackintosh, o instalar macOS en hardware no Apple, viola el Acuerdo de Licencia del Usuario Final (EULA) de Apple. Este tutorial es puramente educativo y se realiza bajo tu propia responsabilidad.

## 1. Requisitos:

**Hardware**:
- Procesador Intel Coffee Lake.
- Una placa madre compatible.
- Gráficos integrados UHD 630 o una tarjeta gráfica compatible.
- Memoria RAM de al menos 8 GB.
- Un disco duro o SSD de al menos 64 GB.

**Software**:
- Imagen de macOS (puede obtenerse desde la Mac App Store desde una Mac).
- Una memoria USB de al menos 16 GB.
- [OpenCore](https://github.com/acidanthera/OpenCorePkg) (un bootloader para Hackintosh).
- [PropioTree](https://github.com/corpnewt/ProperTree) o un editor plist compatible.

## 2. Creación de la USB bootable:

1. Descarga macOS desde la Mac App Store.
2. Formatea tu USB como "Mac OS Extended (Journaled)" y nómbralo "MyVolume".
3. Ejecuta el siguiente comando en Terminal (reemplazando `CarpetaDeDescarga` por el path donde descargaste macOS):
sudo /Applications/CarpetaDeDescarga/Install\ macOS\ Mojave.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume


## 3. Configurar OpenCore:

1. Descarga la última versión de OpenCore y descomprímelo.
2. Copia los archivos necesarios al USB. Tu USB debería tener la siguiente estructura:

EFI
BOOT
BOOTx64.efi
OC
ACPI
Drivers
OpenRuntime.efi
...
Kexts
WhateverGreen.kext
Lilu.kext
...
Resources
Tools
config.plist

3. Utiliza PropioTree para editar `config.plist`. Aquí es donde debes configurar las especificaciones de tu hardware y las correcciones específicas para Coffee Lake.

## 4. Instalación:

1. Reinicia tu PC y entra en la BIOS/UEFI.
2. Configura tu BIOS para arrancar desde USB y desactiva funciones incompatibles como CFG-Lock y VT-d.
3. Guarda y reinicia.
4. En OpenCore, selecciona "Install macOS" y sigue las instrucciones en pantalla.

## 5. Post-instalación:

Una vez instalado macOS, deberás transferir tus archivos EFI desde tu USB a tu disco duro para que puedas arrancar sin la memoria USB.

**Recordatorio**: Asegúrate de leer la documentación de OpenCore y consultar foros y comunidades relacionadas para solucionar problemas específicos. ¡Buena suerte!
