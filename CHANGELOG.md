# Changelog

## [1.2.0](https://github.com/respond-io/awesome-phonenumber/compare/v1.1.0...v1.2.0) (2025-05-07)


### Features

* updated readme to force release a major version ([54885c7](https://github.com/respond-io/awesome-phonenumber/commit/54885c711d4937d415c3437c153644186703cd1f))

## [1.1.0](https://github.com/respond-io/awesome-phonenumber/compare/v1.0.10...v1.1.0) (2025-04-30)


### Features

* remove unnecessary 'Force release' note from README ([5c613e5](https://github.com/respond-io/awesome-phonenumber/commit/5c613e529090619a0cdaa8a8f6208e2ca3fc4160))

## [1.0.10](https://github.com/respond-io/awesome-phonenumber/compare/v1.0.9...v1.0.10) (2024-12-09)


### Bug Fixes

* force rerelease ([a9e6088](https://github.com/respond-io/awesome-phonenumber/commit/a9e60883f21f524364c20868eefaa5c33b75fe3d))

## [1.0.9](https://github.com/respond-io/awesome-phonenumber/compare/v1.0.8...v1.0.9) (2024-12-09)


### Bug Fixes

* publish the correct folder ([39c5b8b](https://github.com/respond-io/awesome-phonenumber/commit/39c5b8bb299f062839835e2e681f25fcb1ec70b7))

## [1.0.8](https://github.com/respond-io/awesome-phonenumber/compare/v1.0.7...v1.0.8) (2024-12-09)


### Bug Fixes

* fixed action to point to correct folder ([863e805](https://github.com/respond-io/awesome-phonenumber/commit/863e8050944b089b3d9c33eda0f3dad086dc40b4))

## [1.0.7](https://github.com/respond-io/awesome-phonenumber/compare/v1.0.6...v1.0.7) (2024-12-09)


### Bug Fixes

* force release ([220712e](https://github.com/respond-io/awesome-phonenumber/commit/220712e1deee0437740b6f3d769bfe5afe9ee7ef))

## [1.0.6](https://github.com/respond-io/awesome-phonenumber/compare/v1.0.5...v1.0.6) (2024-12-09)


### Bug Fixes

* Added missing publish config ([7b2e7c4](https://github.com/respond-io/awesome-phonenumber/commit/7b2e7c4ec4072d4d70521db4d4d59ee6a9f0b132))

## [1.0.5](https://github.com/respond-io/awesome-phonenumber/compare/v1.0.4...v1.0.5) (2024-12-09)


### Bug Fixes

* Fix package.json ([71c3c95](https://github.com/respond-io/awesome-phonenumber/commit/71c3c95e1597a5aeeab754ac275ed53128576b97))

## [1.0.4](https://github.com/respond-io/awesome-phonenumber/compare/v1.0.3...v1.0.4) (2024-12-09)


### Bug Fixes

* Added explicit postbuild ([a4c3ae1](https://github.com/respond-io/awesome-phonenumber/commit/a4c3ae1e6d4d07e11778a6e9cac796db83b373b0))

## [1.0.3](https://github.com/respond-io/awesome-phonenumber/compare/v1.0.2...v1.0.3) (2024-12-09)


### Bug Fixes

* Added post build script, also commented out slack notification action ([66148fd](https://github.com/respond-io/awesome-phonenumber/commit/66148fd64d87d060eab572e5a88ab4c58ad6aaca))

## [1.0.2](https://github.com/respond-io/awesome-phonenumber/compare/v1.0.1...v1.0.2) (2024-12-06)


### Bug Fixes

* added the correct publish command ([6168fc5](https://github.com/respond-io/awesome-phonenumber/commit/6168fc5ebb780e6c7fbc9a8120c17d9fbcceb27d))

## [1.0.1](https://github.com/respond-io/awesome-phonenumber/compare/v1.0.0...v1.0.1) (2024-12-06)


### Bug Fixes

* set the correct dist directory ([41cc369](https://github.com/respond-io/awesome-phonenumber/commit/41cc3697435e28d2dc45f46eed39df9e8b107496))

## 1.0.0 (2024-12-06)


### ⚠ BREAKING CHANGES

* Added core feature
* **node:** Dropped support for Node 14 and 16 (although it probably still works)
* **node:** Dropped Node 12 support
* **core:** API change
* **api:** API change

### Features

* Added findNumbers feature ([bdcf9ad](https://github.com/respond-io/awesome-phonenumber/commit/bdcf9adb07a4088742bdb64da0ff7c10dccde139))
* **api:** changed API, no more class constructors ([09e0aeb](https://github.com/respond-io/awesome-phonenumber/commit/09e0aebc352f3f963509bc3d4275b13173e4e89e))
* **closure:** compile without writing polyfills ([8abfbfe](https://github.com/respond-io/awesome-phonenumber/commit/8abfbfe7e30d05600150258452c1d8d26f529691)), closes [#66](https://github.com/respond-io/awesome-phonenumber/issues/66)
* **closure:** using new version of the closure compiler ([99b201c](https://github.com/respond-io/awesome-phonenumber/commit/99b201c3b9c8147bcb522a5cfd88544598838b3a)), closes [#65](https://github.com/respond-io/awesome-phonenumber/issues/65)
* **core:** added getCountryCode() for phone number instances ([59caa83](https://github.com/respond-io/awesome-phonenumber/commit/59caa83936446e61044e5c4e80be8d1a60463f70)), closes [#39](https://github.com/respond-io/awesome-phonenumber/issues/39)
* **core:** Expose getSupportedRegions also. ([e28e191](https://github.com/respond-io/awesome-phonenumber/commit/e28e1916f8747541c7c2b243bc45d75c16f1d730))
* **core:** Made code-to-region mapping as early as possible ([191fe9a](https://github.com/respond-io/awesome-phonenumber/commit/191fe9a2cd772bc41141d9a35d795226a3ca5922)), closes [#30](https://github.com/respond-io/awesome-phonenumber/issues/30)
* **core:** rewritten API and bumped libphonenumber to 8.13.1 ([6cf2495](https://github.com/respond-io/awesome-phonenumber/commit/6cf24955f9f799fa52f694ab681cb58a55d3087d))
* **deps:** bumped build deps google-closure-compiler and google-closure-library ([5ca7b82](https://github.com/respond-io/awesome-phonenumber/commit/5ca7b82e0382b8a5f4bbbbf10d6db83f59e4cc3e))
* **esm:** added separate package to test esm and cjs exports explicitly ([667575a](https://github.com/respond-io/awesome-phonenumber/commit/667575a8f9e3dae253fc0d06076fcad358cec642))
* **esm:** build as esm too ([a0869ff](https://github.com/respond-io/awesome-phonenumber/commit/a0869ffa1406bd7aca8007fb3f8b48812a93067d)), closes [#74](https://github.com/respond-io/awesome-phonenumber/issues/74)
* **node:** require minimum Node 18 ([1c00199](https://github.com/respond-io/awesome-phonenumber/commit/1c00199d4149635257b13ca67b7b0a24f07611f8))
* Support short number handling ([df36157](https://github.com/respond-io/awesome-phonenumber/commit/df36157e5d86e6c42baf329c204e3f0157dc0d52)), closes [#112](https://github.com/respond-io/awesome-phonenumber/issues/112)
* **upstream:** Bumped libphonenumber to 8.10.1 ([fc7c90e](https://github.com/respond-io/awesome-phonenumber/commit/fc7c90e44be51043fba7577d88055adfcb618912)), closes [#29](https://github.com/respond-io/awesome-phonenumber/issues/29)
* **upstream:** Bumped libphonenumber to 8.10.10 ([6ffa77b](https://github.com/respond-io/awesome-phonenumber/commit/6ffa77bef0807f01f3481aacaa050fc4e04cb85c))
* **upstream:** Bumped libphonenumber to 8.10.11 ([a38d2a2](https://github.com/respond-io/awesome-phonenumber/commit/a38d2a252b67c45d132a679b73023819d05ac687))
* **upstream:** Bumped libphonenumber to 8.10.13 ([c36c323](https://github.com/respond-io/awesome-phonenumber/commit/c36c32394c0ca7275f9db2f132a5a49caec15e0e))
* **upstream:** Bumped libphonenumber to 8.10.14 ([79f7d3b](https://github.com/respond-io/awesome-phonenumber/commit/79f7d3b3f61c7e0d3dac61e0729c521e23c3b40b))
* **upstream:** Bumped libphonenumber to 8.10.16 ([7b14c1a](https://github.com/respond-io/awesome-phonenumber/commit/7b14c1a37116ea57fc6f75e379133d4ff3a712e8))
* **upstream:** Bumped libphonenumber to 8.10.17 ([1f1f125](https://github.com/respond-io/awesome-phonenumber/commit/1f1f125f76b59c39fe4a48d762758eaf05ced7b7))
* **upstream:** bumped libphonenumber to 8.10.18 ([7bf36b4](https://github.com/respond-io/awesome-phonenumber/commit/7bf36b4f8b43ffa05bf612879ade2876313b2194))
* **upstream:** bumped libphonenumber to 8.10.20 ([b199a18](https://github.com/respond-io/awesome-phonenumber/commit/b199a186c67da60565682d1e5aa28b4e9339ec1f))
* **upstream:** bumped libphonenumber to 8.10.21 ([6618936](https://github.com/respond-io/awesome-phonenumber/commit/6618936ea484d4c5dfaac91c7e597864a81c9c15))
* **upstream:** bumped libphonenumber to 8.10.22 ([0e99b28](https://github.com/respond-io/awesome-phonenumber/commit/0e99b285139adb6670f900ed36bcdc90c89d8334))
* **upstream:** bumped libphonenumber to 8.10.23 ([9d76594](https://github.com/respond-io/awesome-phonenumber/commit/9d765944a955d2e0133265981d7b781db6157c0e))
* **upstream:** Bumped libphonenumber to 8.10.4 ([e88e919](https://github.com/respond-io/awesome-phonenumber/commit/e88e919000587beda26e3171a36b2a818a79f0ad))
* **upstream:** Bumped libphonenumber to 8.10.6 ([568aad1](https://github.com/respond-io/awesome-phonenumber/commit/568aad19a18c716427bb95e77d37e0f1da9e0b0a))
* **upstream:** Bumped libphonenumber to 8.10.7 ([c688ff7](https://github.com/respond-io/awesome-phonenumber/commit/c688ff7ecde940ee554b5b8a192049e773f935cd))
* **upstream:** Bumped libphonenumber to 8.10.8 ([d870a31](https://github.com/respond-io/awesome-phonenumber/commit/d870a316677754683fd1eef2b16ef2ac64abb06a))
* **upstream:** Bumped libphonenumber to 8.10.9 ([3bbecad](https://github.com/respond-io/awesome-phonenumber/commit/3bbecad0d1691d749711cedd8e2a6e0ba4d5bf83))
* **upstream:** bumped libphonenumber to 8.11.0 ([754f8c7](https://github.com/respond-io/awesome-phonenumber/commit/754f8c7d70fe7ab8c9040ecfaf6609de9d162ce2))
* **upstream:** bumped libphonenumber to 8.11.1 ([7989544](https://github.com/respond-io/awesome-phonenumber/commit/7989544ae2b7efd62f5f4246c7ad99e768ae8798))
* **upstream:** bumped libphonenumber to 8.11.2 ([8f63c20](https://github.com/respond-io/awesome-phonenumber/commit/8f63c209f2df24189c0ff9ac0b9e921c309ee964))
* **upstream:** bumped libphonenumber to 8.11.3 ([c9ef51c](https://github.com/respond-io/awesome-phonenumber/commit/c9ef51c48d090e29eaf7a9cd7b9a83e0c29aedb3))
* **upstream:** bumped libphonenumber to 8.11.4 ([5ac9485](https://github.com/respond-io/awesome-phonenumber/commit/5ac9485ac1bc8ac823d48872f2d74c16682023dd))
* **upstream:** bumped libphonenumber to 8.11.5 ([a6c3161](https://github.com/respond-io/awesome-phonenumber/commit/a6c3161b55c44f570664ef7a5eec7fb10eb6790c))
* **upstream:** bumped libphonenumber to 8.12.0 ([159bdb5](https://github.com/respond-io/awesome-phonenumber/commit/159bdb514194e8152f3c981286702d58172c4cdd))
* **upstream:** bumped libphonenumber to 8.12.1 ([e6c1de8](https://github.com/respond-io/awesome-phonenumber/commit/e6c1de8f57680887d904a4ca270f37943304a703))
* **upstream:** bumped libphonenumber to 8.12.10 ([1d378b3](https://github.com/respond-io/awesome-phonenumber/commit/1d378b39cc79342fc9ef867b3d946ad147f5d87c))
* **upstream:** bumped libphonenumber to 8.12.11 ([e0f8b9d](https://github.com/respond-io/awesome-phonenumber/commit/e0f8b9dada9424988aaaf000dc73f2e6d122bcf0))
* **upstream:** bumped libphonenumber to 8.12.12 ([cd7c34d](https://github.com/respond-io/awesome-phonenumber/commit/cd7c34d685c5a04368486a24413a25a028f16547))
* **upstream:** bumped libphonenumber to 8.12.13 ([86a0120](https://github.com/respond-io/awesome-phonenumber/commit/86a01202f00965efdcbfb9afe9df2ac78c583a65))
* **upstream:** bumped libphonenumber to 8.12.14 ([bb8cd57](https://github.com/respond-io/awesome-phonenumber/commit/bb8cd5798e62bd5dc6070c2ff2b726693cbb8eef))
* **upstream:** bumped libphonenumber to 8.12.15 ([1b88e44](https://github.com/respond-io/awesome-phonenumber/commit/1b88e4453ec9a68ed4c956e80226d8d0f3603fce))
* **upstream:** bumped libphonenumber to 8.12.16 ([0445de4](https://github.com/respond-io/awesome-phonenumber/commit/0445de4d5ce2c1ac1a4a4d1940f9f0c55b4450d5))
* **upstream:** bumped libphonenumber to 8.12.17 ([13a6c8f](https://github.com/respond-io/awesome-phonenumber/commit/13a6c8fdd8f5429568ad6de8e3257944a0ec45a2))
* **upstream:** bumped libphonenumber to 8.12.18 ([7e3f9cf](https://github.com/respond-io/awesome-phonenumber/commit/7e3f9cf60dbedc81bf90053fca5b7cd1a338a817))
* **upstream:** bumped libphonenumber to 8.12.19 ([b93b160](https://github.com/respond-io/awesome-phonenumber/commit/b93b160e4cca7624b2f9806c2e12c56faba58861)), closes [#60](https://github.com/respond-io/awesome-phonenumber/issues/60)
* **upstream:** bumped libphonenumber to 8.12.2 ([c22440b](https://github.com/respond-io/awesome-phonenumber/commit/c22440b03b146bdf8a37c82659b113d56b406dfe))
* **upstream:** bumped libphonenumber to 8.12.20 ([461fd1b](https://github.com/respond-io/awesome-phonenumber/commit/461fd1bad0c18d49c03e61e792cbb1d15de8e3df))
* **upstream:** bumped libphonenumber to 8.12.21 ([19a858d](https://github.com/respond-io/awesome-phonenumber/commit/19a858db737eeffc64614ceaf80ea68b94843de0))
* **upstream:** bumped libphonenumber to 8.12.22 ([17fc050](https://github.com/respond-io/awesome-phonenumber/commit/17fc050f661aeb562ba8636428df035e571e39bb))
* **upstream:** bumped libphonenumber to 8.12.23 ([e0444b1](https://github.com/respond-io/awesome-phonenumber/commit/e0444b105a264dba1c8390086f4a598cdc355f3b))
* **upstream:** bumped libphonenumber to 8.12.24 ([96209e0](https://github.com/respond-io/awesome-phonenumber/commit/96209e091f3acb629ad62ebd8e3cf7b1c9b57270))
* **upstream:** bumped libphonenumber to 8.12.25 ([e0f86be](https://github.com/respond-io/awesome-phonenumber/commit/e0f86beb122c051b11750cf7e73e876199cf4dd3))
* **upstream:** bumped libphonenumber to 8.12.26 ([b3b1251](https://github.com/respond-io/awesome-phonenumber/commit/b3b12512a814af2bd06159d021e7349ad78024a9))
* **upstream:** bumped libphonenumber to 8.12.28 ([36a0c20](https://github.com/respond-io/awesome-phonenumber/commit/36a0c20fed6d4e27d8b6a5baea7968406016ba41))
* **upstream:** bumped libphonenumber to 8.12.29 ([2eed5bf](https://github.com/respond-io/awesome-phonenumber/commit/2eed5bf36970d19257cca74d00d8ec5bdd56afc9))
* **upstream:** bumped libphonenumber to 8.12.3 ([9b555f8](https://github.com/respond-io/awesome-phonenumber/commit/9b555f80e35337bc38cf4409eeacd2d7f73b6e4c))
* **upstream:** bumped libphonenumber to 8.12.30 ([18b5496](https://github.com/respond-io/awesome-phonenumber/commit/18b549626c16db28e4da9869cde255facc8b97e3))
* **upstream:** bumped libphonenumber to 8.12.31 ([32592f7](https://github.com/respond-io/awesome-phonenumber/commit/32592f70c67624f81457d115eb6fc1b053b7dcca))
* **upstream:** bumped libphonenumber to 8.12.32 ([af8ec93](https://github.com/respond-io/awesome-phonenumber/commit/af8ec939268ee24ea6da4b545e2230f553935a12))
* **upstream:** bumped libphonenumber to 8.12.33 ([12dce20](https://github.com/respond-io/awesome-phonenumber/commit/12dce200cfeb58fc99d65f92bdd00ebce6f27c71))
* **upstream:** bumped libphonenumber to 8.12.34 ([5bf40a0](https://github.com/respond-io/awesome-phonenumber/commit/5bf40a0c1fc410d346101c6f28c9a30e60a8c31d))
* **upstream:** bumped libphonenumber to 8.12.35 ([3b18e6d](https://github.com/respond-io/awesome-phonenumber/commit/3b18e6dada2132c354afb630426301c441b48f40))
* **upstream:** bumped libphonenumber to 8.12.39 ([d745744](https://github.com/respond-io/awesome-phonenumber/commit/d7457446941948640587e7328f0fc999d76e5553))
* **upstream:** bumped libphonenumber to 8.12.4 ([936b9fb](https://github.com/respond-io/awesome-phonenumber/commit/936b9fb76e3edb51a7f571f2fc386b65ddac6547))
* **upstream:** bumped libphonenumber to 8.12.40 ([0e32835](https://github.com/respond-io/awesome-phonenumber/commit/0e32835d6b0485992e0028755dfd9d21cc3065be))
* **upstream:** bumped libphonenumber to 8.12.41 ([f361350](https://github.com/respond-io/awesome-phonenumber/commit/f361350fe5bbb8005c9777d5ad120ef3bd78b3d2))
* **upstream:** bumped libphonenumber to 8.12.42 ([d74ae8f](https://github.com/respond-io/awesome-phonenumber/commit/d74ae8fcd424110b250ae2ba6ba127eafdf66036))
* **upstream:** bumped libphonenumber to 8.12.43 ([f4e1dd6](https://github.com/respond-io/awesome-phonenumber/commit/f4e1dd688a5bf576e9ffdb825f21b4f841680a2b))
* **upstream:** bumped libphonenumber to 8.12.45 ([0282c3a](https://github.com/respond-io/awesome-phonenumber/commit/0282c3a7e3fd877d5e89b66f7d82a2c9f2acb8fb)), closes [#76](https://github.com/respond-io/awesome-phonenumber/issues/76)
* **upstream:** bumped libphonenumber to 8.12.46 ([9ca88ee](https://github.com/respond-io/awesome-phonenumber/commit/9ca88ee7b88734d2296434c7a2c5594f293c7f5e))
* **upstream:** bumped libphonenumber to 8.12.47 ([5e988cb](https://github.com/respond-io/awesome-phonenumber/commit/5e988cba02880085a2e67744949341bc7dd6f321))
* **upstream:** bumped libphonenumber to 8.12.48 ([1af99f0](https://github.com/respond-io/awesome-phonenumber/commit/1af99f02357679ed856f19d08547eb897c20189f))
* **upstream:** bumped libphonenumber to 8.12.5 ([55674db](https://github.com/respond-io/awesome-phonenumber/commit/55674db40da3023eb1800526c7fa572dcc81484d))
* **upstream:** bumped libphonenumber to 8.12.50 ([301b614](https://github.com/respond-io/awesome-phonenumber/commit/301b614683af6b2659aa0b3514ab3479cb46ae94))
* **upstream:** bumped libphonenumber to 8.12.51 ([271c448](https://github.com/respond-io/awesome-phonenumber/commit/271c44854b7716901f536eaea3f18224dd51f63a))
* **upstream:** bumped libphonenumber to 8.12.53 ([614665d](https://github.com/respond-io/awesome-phonenumber/commit/614665d599b89a9a2ce61dd33f4e6e6a42dee2a1))
* **upstream:** bumped libphonenumber to 8.12.56 ([2eb1f7c](https://github.com/respond-io/awesome-phonenumber/commit/2eb1f7c03c2b83ac789662e6a836d0d443670d11))
* **upstream:** bumped libphonenumber to 8.12.6 ([38b4b97](https://github.com/respond-io/awesome-phonenumber/commit/38b4b9799a1bfaaae48ea0a66efac44f7a393241))
* **upstream:** bumped libphonenumber to 8.12.7 ([1b6d12f](https://github.com/respond-io/awesome-phonenumber/commit/1b6d12f5df2c29088f9c372872bc8174170a3e14))
* **upstream:** bumped libphonenumber to 8.12.8 ([f9a81da](https://github.com/respond-io/awesome-phonenumber/commit/f9a81dad2fea60b966db4101d20a4340f19a895e))
* **upstream:** bumped libphonenumber to 8.12.9 ([d2b29c4](https://github.com/respond-io/awesome-phonenumber/commit/d2b29c419b7d1e512802d8e2c40c46193dbcfd30))
* **upstream:** bumped libphonenumber to 8.13.10 ([6a509b5](https://github.com/respond-io/awesome-phonenumber/commit/6a509b5179dd7ea2cac0f65a71c045fbf9a70e0c))
* **upstream:** bumped libphonenumber to 8.13.11 ([8262ed0](https://github.com/respond-io/awesome-phonenumber/commit/8262ed0833402adc7860aa8d3ce35b3a7bbc6a48))
* **upstream:** bumped libphonenumber to 8.13.12 ([8491e6a](https://github.com/respond-io/awesome-phonenumber/commit/8491e6a30d1d74b4bfb0a5dd041d6eafc4a769ae))
* **upstream:** bumped libphonenumber to 8.13.13 ([4839d7d](https://github.com/respond-io/awesome-phonenumber/commit/4839d7d58db84aa58c521ace9f5d12cb52d1abab))
* **upstream:** bumped libphonenumber to 8.13.14 ([e996897](https://github.com/respond-io/awesome-phonenumber/commit/e996897d2e20dec574a27e8956f835988235fe6d))
* **upstream:** bumped libphonenumber to 8.13.15 ([46959d3](https://github.com/respond-io/awesome-phonenumber/commit/46959d32a923c41bb930e7cbe144a2b391a44e16))
* **upstream:** bumped libphonenumber to 8.13.2 ([42da60c](https://github.com/respond-io/awesome-phonenumber/commit/42da60c802bfd6e1178f5f53c212a70cbaf1886b))
* **upstream:** bumped libphonenumber to 8.13.21 ([b9ef3b5](https://github.com/respond-io/awesome-phonenumber/commit/b9ef3b5ad3393bd29e5bfd964e5f9e5e08a9d468))
* **upstream:** bumped libphonenumber to 8.13.22 ([b3ac091](https://github.com/respond-io/awesome-phonenumber/commit/b3ac091db9f889ae1e40e65e7208f5e1362b9984)), closes [#107](https://github.com/respond-io/awesome-phonenumber/issues/107)
* **upstream:** bumped libphonenumber to 8.13.23 ([7d1c6bb](https://github.com/respond-io/awesome-phonenumber/commit/7d1c6bb7f03b91cbf3fa7927c22f50ea73d95bff))
* **upstream:** bumped libphonenumber to 8.13.24 ([b17799a](https://github.com/respond-io/awesome-phonenumber/commit/b17799a1ca14bafef75bb1e523ba2a21b408df87))
* **upstream:** bumped libphonenumber to 8.13.26 ([7caff89](https://github.com/respond-io/awesome-phonenumber/commit/7caff8916ad5febd42d4cd0a68b65520a5b46a2d))
* **upstream:** bumped libphonenumber to 8.13.27 ([b5c6111](https://github.com/respond-io/awesome-phonenumber/commit/b5c611185536a8e9558f1ae32f12705c8d7a4c9a))
* **upstream:** bumped libphonenumber to 8.13.28 ([00b54b8](https://github.com/respond-io/awesome-phonenumber/commit/00b54b8b41a16a97c285f8a21ba8da8f120beed6))
* **upstream:** bumped libphonenumber to 8.13.3 ([d24558f](https://github.com/respond-io/awesome-phonenumber/commit/d24558f3c45a7d628c57b3872364ff7b2507a31e))
* **upstream:** bumped libphonenumber to 8.13.32 ([20e6083](https://github.com/respond-io/awesome-phonenumber/commit/20e6083dacbd78eb4776a24f6ac23dc64cae60d0))
* **upstream:** bumped libphonenumber to 8.13.33 ([6619070](https://github.com/respond-io/awesome-phonenumber/commit/66190708a4dc7554224299ea38dd3ea05ed2689c))
* **upstream:** bumped libphonenumber to 8.13.34 ([fa377c6](https://github.com/respond-io/awesome-phonenumber/commit/fa377c61788a32e9fda4007f0d67c9d4eb38c4aa))
* **upstream:** bumped libphonenumber to 8.13.35 ([3413f9a](https://github.com/respond-io/awesome-phonenumber/commit/3413f9a4e9f9536a6384daa4625c21c18fb874fc))
* **upstream:** bumped libphonenumber to 8.13.37 ([4de75cc](https://github.com/respond-io/awesome-phonenumber/commit/4de75cc10b4c4a585746e0119dcc852e3939d93c))
* **upstream:** bumped libphonenumber to 8.13.4 ([1a2ea8a](https://github.com/respond-io/awesome-phonenumber/commit/1a2ea8a6fba3fb12563ae06df943f14df2e6aa5c))
* **upstream:** bumped libphonenumber to 8.13.40 ([5919476](https://github.com/respond-io/awesome-phonenumber/commit/5919476335ea6dc6e3574d7a337cd9bc060def71))
* **upstream:** bumped libphonenumber to 8.13.43 ([14a8647](https://github.com/respond-io/awesome-phonenumber/commit/14a8647fcf35e5e9db7ff5f2a4e12d65a724dc5b))
* **upstream:** bumped libphonenumber to 8.13.46 ([d0873dc](https://github.com/respond-io/awesome-phonenumber/commit/d0873dc378976067198cd8b76a6fe0c3c219af05))
* **upstream:** bumped libphonenumber to 8.13.47 ([155e56d](https://github.com/respond-io/awesome-phonenumber/commit/155e56d1413e76af19ebc64f4810e272e7e76659))
* **upstream:** bumped libphonenumber to 8.13.5 ([df88854](https://github.com/respond-io/awesome-phonenumber/commit/df8885459a823b5b11d67287d66845e4e161a3d6))
* **upstream:** bumped libphonenumber to 8.13.6 ([f48ba48](https://github.com/respond-io/awesome-phonenumber/commit/f48ba48417f5d9f1c0ad584f752c2640a7a2161e))
* **upstream:** bumped libphonenumber to 8.13.7 ([0676bd1](https://github.com/respond-io/awesome-phonenumber/commit/0676bd13be3d219bfef2673568a9d542b0f6a387))
* **upstream:** bumped libphonenumber to 8.13.8 ([b312e85](https://github.com/respond-io/awesome-phonenumber/commit/b312e8509f402af40ac9d5a6b00b57565ccdb227))
* **upstream:** bumped libphonenumber to 8.13.9 ([6c665ca](https://github.com/respond-io/awesome-phonenumber/commit/6c665ca1c38bfaf34e94eca4e2a224e19174387d))


### Bug Fixes

* **as-you-type:** fixed removeChar not handling e.g. spaces properly ([80bd761](https://github.com/respond-io/awesome-phonenumber/commit/80bd7611d1b34b352a59d3a11eb00bfcfe06a56e)), closes [#49](https://github.com/respond-io/awesome-phonenumber/issues/49)
* **as-you-type:** reset() with args now clearing number() properly ([aa9861c](https://github.com/respond-io/awesome-phonenumber/commit/aa9861c16c24382aae620418cde4b35377f6c28b)), closes [#64](https://github.com/respond-io/awesome-phonenumber/issues/64)
* **benchmark:** fixed erroneous statistics footnote ([90d198c](https://github.com/respond-io/awesome-phonenumber/commit/90d198c571a0c4c67a1f6fc0c8f7fcec056cc45d))
* **benchmark:** updated benchmark with libphonenumber-js ([88bb8f1](https://github.com/respond-io/awesome-phonenumber/commit/88bb8f1128de16e8b68f321bda45580c10d30adc))
* **build:** build fix ([d74f36c](https://github.com/respond-io/awesome-phonenumber/commit/d74f36c3f985cb9a2b74641110a412c54f888de0)), closes [#67](https://github.com/respond-io/awesome-phonenumber/issues/67)
* **bundling:** fixed bundling/exporting for non-Node environments ([559e410](https://github.com/respond-io/awesome-phonenumber/commit/559e410b27123b1e5599645469164c18d9cfbab6)), closes [#68](https://github.com/respond-io/awesome-phonenumber/issues/68) [#69](https://github.com/respond-io/awesome-phonenumber/issues/69) [#70](https://github.com/respond-io/awesome-phonenumber/issues/70)
* **cc:** Handle invalid country codes ([c323fe6](https://github.com/respond-io/awesome-phonenumber/commit/c323fe656e3db5c8c0c3018af49b02b806fc4e1d)), closes [#26](https://github.com/respond-io/awesome-phonenumber/issues/26)
* **ci/cd:** build production package on Node.js 14 ([d0de83c](https://github.com/respond-io/awesome-phonenumber/commit/d0de83cfd1238958cd21245a65ecab14972220af))
* **ci/cd:** Using local semantic-release ([9069255](https://github.com/respond-io/awesome-phonenumber/commit/906925571be0e1e49a39248cdb64b580bace17f4))
* **ci/cd:** using semantic-release with npx again ([4fa6936](https://github.com/respond-io/awesome-phonenumber/commit/4fa6936f05a29afa765917f347d6b957915daaf7))
* **compat:** replace const with var, potentially fixing old browser issues ([507f250](https://github.com/respond-io/awesome-phonenumber/commit/507f2502c4631c473c62a22544ace4f14c2ece39)), closes [#71](https://github.com/respond-io/awesome-phonenumber/issues/71)
* **core:** Fix handling invalid numbers ([77f0374](https://github.com/respond-io/awesome-phonenumber/commit/77f03742dd92ce10975613a2ac97e50e4eac5243)), closes [#98](https://github.com/respond-io/awesome-phonenumber/issues/98)
* **core:** fix WeakMap reference error ([d30307a](https://github.com/respond-io/awesome-phonenumber/commit/d30307a47a246cda30681867beb56c9ed7aa82bf)), closes [#62](https://github.com/respond-io/awesome-phonenumber/issues/62)
* **core:** fixed duplicates in getSupportCallingCodes ([b3301b5](https://github.com/respond-io/awesome-phonenumber/commit/b3301b5d439aaa0308e1e255f8a0490baae9fb38)), closes [#61](https://github.com/respond-io/awesome-phonenumber/issues/61)
* **core:** Fixed missing export of getSupportedRegionCodes ([81e520b](https://github.com/respond-io/awesome-phonenumber/commit/81e520baf5964a0f636bc3520b6f3effda4ffef4)), closes [#38](https://github.com/respond-io/awesome-phonenumber/issues/38)
* **core:** ignore region code if E164 is provided ([32e2bb7](https://github.com/respond-io/awesome-phonenumber/commit/32e2bb73c9f1417e5cd6bbc9f76c98336e6b1e16)), closes [#51](https://github.com/respond-io/awesome-phonenumber/issues/51)
* **countries:** Fixed region handling of shared country codes (e.g. US/Canada) ([661bd34](https://github.com/respond-io/awesome-phonenumber/commit/661bd34ba305d780d805d960269928d98ccfb0bb)), closes [#31](https://github.com/respond-io/awesome-phonenumber/issues/31)
* **deps:** bumped dev deps ([f6da2de](https://github.com/respond-io/awesome-phonenumber/commit/f6da2de573ded25ffd40066f126aaa5a84dcf82b))
* **deps:** Bumped dev deps ([dcab7b4](https://github.com/respond-io/awesome-phonenumber/commit/dcab7b47763d1ae6cd60ea9457186b538c465e7b))
* **input:** added input validation to throw descriptive errors ([bc8f1de](https://github.com/respond-io/awesome-phonenumber/commit/bc8f1de059f0213af00ba052e79bc617a45d31a6)), closes [#40](https://github.com/respond-io/awesome-phonenumber/issues/40)
* **package:** added missing 'main' field in package.json ([f3bcaa2](https://github.com/respond-io/awesome-phonenumber/commit/f3bcaa20e037dcb503500cd7874201511623627a)), closes [#28](https://github.com/respond-io/awesome-phonenumber/issues/28)
* **package:** Added missing dev-dep on commitizen ([a7dfc2d](https://github.com/respond-io/awesome-phonenumber/commit/a7dfc2dbe6cbf72d078d7534a34d27b35eb2d535))
* **package:** added package.json export ([3e7b5c4](https://github.com/respond-io/awesome-phonenumber/commit/3e7b5c4faa0df649d4c28dcf55da29e049224bdc)), closes [#79](https://github.com/respond-io/awesome-phonenumber/issues/79)
* **package:** fixed package.json type, missing export file ([a5a64d5](https://github.com/respond-io/awesome-phonenumber/commit/a5a64d53239222763bf91b6f47ed0e4d6dc3a896))
* **package:** Only ships necessary files ([90cfce1](https://github.com/respond-io/awesome-phonenumber/commit/90cfce1382e513c93cf2cea6ff18d91de3c363ad))
* **parser:** handle leading 00 same as libphonenumber ([57e6baa](https://github.com/respond-io/awesome-phonenumber/commit/57e6baacbbe840c672174a85b031b199546fc058)), closes [#78](https://github.com/respond-io/awesome-phonenumber/issues/78)
* reverted [#98](https://github.com/respond-io/awesome-phonenumber/issues/98) to align with libphonenumber ([84ee203](https://github.com/respond-io/awesome-phonenumber/commit/84ee203527fcd8394636d636e3093741f8282a56)), closes [#103](https://github.com/respond-io/awesome-phonenumber/issues/103)
* **rollup:** Use rollup v3 ([5cad513](https://github.com/respond-io/awesome-phonenumber/commit/5cad5134854df518a378c748fd908a9d1cac2afd))
* **tooling:** Fixed semantic-release ([930a5cd](https://github.com/respond-io/awesome-phonenumber/commit/930a5cddf3fa37818864853549c32f73f06ce91b))
* **types:** added missing 'unknown' value back into PhoneNumberPossibility ([1009e4c](https://github.com/respond-io/awesome-phonenumber/commit/1009e4cc0900debc131194af2930d4bc958229ac))
* **types:** fixed countryCode type which is number, not string ([017b301](https://github.com/respond-io/awesome-phonenumber/commit/017b301e8f2871c16f237068296f0c376687ec2c)), closes [#90](https://github.com/respond-io/awesome-phonenumber/issues/90)
* **typings:** allow calling as function, even in TypeScript ([162a48f](https://github.com/respond-io/awesome-phonenumber/commit/162a48f2db4f2d56bec998d1cb1a10a0ddff2f4b))
* **typings:** fixed type of getCountryCode() to return number not string ([49e4782](https://github.com/respond-io/awesome-phonenumber/commit/49e47828d62b7e35cd7c142a844f29871bca7f0c)), closes [#39](https://github.com/respond-io/awesome-phonenumber/issues/39)
* **typings:** fixed types when moduleResolution: "Node16" ([24c1433](https://github.com/respond-io/awesome-phonenumber/commit/24c14337b3d53a9c48b60f17226ded1a41e1bc62)), closes [#86](https://github.com/respond-io/awesome-phonenumber/issues/86)
* updated release workflow ([94c5340](https://github.com/respond-io/awesome-phonenumber/commit/94c53409fae57082b625a5a039c8b1363f4fea6e))
* updated workflow to use frozen lockfile ([2d5e366](https://github.com/respond-io/awesome-phonenumber/commit/2d5e366530745982aee2067b6878be1babc71886))
* **upstream:** Bumped libphonenumber to 8.10.3 ([e012d5c](https://github.com/respond-io/awesome-phonenumber/commit/e012d5c4860b08861a80531ba5193443a7c2da69))
* **upstream:** Bumped to 8.10.2 ([55dad82](https://github.com/respond-io/awesome-phonenumber/commit/55dad82013e12fcb502256e31f34c894157478b8))
* **upstream:** Bumped to libphonenumber 8.10.5 ([dff9f44](https://github.com/respond-io/awesome-phonenumber/commit/dff9f44d768daf0fc6c2e8b19535c5925df59332))


### Miscellaneous Chores

* **node:** Drop support for Node 12 ([4ba989a](https://github.com/respond-io/awesome-phonenumber/commit/4ba989a692070d3dbd471f253aa2c6910d497f7f))
