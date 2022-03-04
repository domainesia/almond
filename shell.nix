{ pkgs ? import <nixpkgs> {} }:

let
  # unstablePkgs = import (fetchTarball https://nixos.org/channels/nixos-unstable/nixexprs.tar.xz) { };
  libpaths = pkgs.lib.makeLibraryPath [ pkgs.stdenv.cc.cc.lib pkgs.zlib ];
in pkgs.mkShell {
  buildInputs = [
    pkgs.cypress
    pkgs.phantomjs2

    # keep this line if you use bash
    pkgs.bashInteractive
  ];

  # Env
  LD_LIBRARY_PATH = libpaths;
  CYPRESS_RUN_BINARY = pkgs.cypress + "/bin/Cypress";
  CYPRESS_INSTALL_BINARY = 0;
}
