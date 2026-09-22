#!/usr/bin/env bash

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CERTS_DIR="$PROJECT_ROOT/certs"

mkdir -p "$CERTS_DIR"

if ! command -v openssl >/dev/null 2>&1; then
  echo "Error: OpenSSL no está instalado o no está disponible en PATH."
  exit 1
fi

openssl req \
  -x509 \
  -newkey rsa:2048 \
  -sha256 \
  -nodes \
  -days 365 \
  -keyout "$CERTS_DIR/localhost-key.pem" \
  -out "$CERTS_DIR/localhost-cert.pem" \
  -subj "/C=CL/ST=Region Metropolitana/L=Santiago/O=SportyStyle/OU=Development/CN=localhost" \
  -addext "subjectAltName=DNS:localhost,IP:127.0.0.1"

echo
echo "Certificados generados correctamente en:"
echo "$CERTS_DIR"
echo
echo "Archivos creados:"
echo "- localhost-key.pem"
echo "- localhost-cert.pem"