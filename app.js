"use strict";

const WHATSAPP_NUMBER = "421950614298";
const STORAGE_KEY = "hoang-tofu-order";
const DESKTOP_MENU_PAGE_SIZE = 12;
const MOBILE_MENU_PAGE_SIZE = 8;

const dishPhotos = [
  "Ảnh mới/image_1778655692314.jpg",
  "Ảnh mới/image_1778655692317.jpg",
  "Ảnh mới/image_1778655692319.jpg",
  "Ảnh mới/image_1778655692321.jpg",
  "Ảnh mới/image_1778655692322.jpg",
  "Ảnh mới/image_1778655692324.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQGP2XIjNArWAejuqfaDrqBrzah-jEcKSvCiM7oHpkHkUBMneyj8PrDneOXjGv0v7XCm4M85-fxstg&oh=03_Q7cD5QGJO62hGZ0j5MhTBpYQ-PqX5wu310iqCadxdTIbZWRpdQ&oe=6A2B8A1B.jpg",
  "Ảnh mới/image_1778655692326.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQGYpnret0YjZtPI_Zl-hVrZFHjIAIz2mj2c7UCfnEeOPoK5pbYeH_eJTTYE1PGLLI8ZPhnYkqiwIA&oh=03_Q7cD5QFhIi8v0_kSuQHppCDm4VXq7SzhTwgGm_gRX5on0jPsgA&oe=6A2B8EAB.jpg",
  "Ảnh mới/image_1778655692328.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQG8U8VYwtiXx5qi9kglskgjjXLxh6DB97nXw1D5H9v8Bgchy_z0BLl5-SXDAvuKP0e13C-xvnJK9w&oh=03_Q7cD5QG7k285FLsvsv085uVpCkR33cRqvcZx04VpSJxQEzGL3g&oe=6A2B605E.jpg",
  "Ảnh mới/image_1778655692330.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQHOG22bLIhxgHyXut0uX7aaVYLltx-u4M4BTIs8agXGDP8hJwcBUW39s4WYtZzc0Vu2vo4k8zKzYg&oh=03_Q7cD5QE1jtVhpl8iV-edjZnUDDq6ur2A6hwxG_Y1f5rD3XiQUg&oe=6A2B6D19.jpg",
  "Ảnh mới/image_1778655692333.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQHB87T6SN7-5upxXc0B4gVYag6nd57JVdNAQ7rQFh912ev_OqNmCbIMx9PXXFkk-Jg2mqpR6ljGYw&oh=03_Q7cD5QGYQHi1db1RXJX2ixJ3dX-Xo_V1dQ-UKTDgkKC5L-5-zQ&oe=6A2B8180.jpg",
  "Ảnh mới/image_1778655692335.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQGeXA_jzG1bPA03DCNchCTqE2VfPPeROM0l-RCy0VWAc8UchWALuuEmzIz_CjmfgeO92sauTNeuKQ&oh=03_Q7cD5QHIsaDSmuICHgUgLmmLy6D18f4EDehfscN-j3WfQGWgKQ&oe=6A2B8B42.jpg",
  "Ảnh mới/image_1778655692338.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQFAudGEspFP_tnkwc8Saaq7TbeDP7admw1I9aifIAMyac_OQPfv6gQq0MUP2zqViVkA9SqKeJKvNw&oh=03_Q7cD5QExVYBg-EzjNRi06Rs-erb66Cy1Lz5lvn1RqX494YotNg&oe=6A2B682C.jpg",
  "Ảnh mới/image_1778655692340.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQGAvHWaQzima9s6l5NzqkTjLUWR7AaDuhzXUtp4CFy9jt9BMC6mE9LlB7XmNswGXCTkB36Q0gGMvA&oh=03_Q7cD5QHEH66Lk6DA8m65xFO1absh09yKTOEfPqWKfvJMIZFuSA&oe=6A2B8490.jpg",
  "Ảnh mới/image_1778655692342.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQFtLSujfFzumfy-34GrjybQrR2uzJePqZOm-DnOAqKJZCSlmCeBZc_XCuWUGRmrpextoqsLwQE86Q&oh=03_Q7cD5QEWUMakFws-RkI3jdSQefZImd_YIiJdN5RUORBIjjfDSA&oe=6A2B70A1.jpg",
  "Ảnh mới/image_1778655692346.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQENecmx0-ZzIfYv4ezXB26y9INrIVCVAaHx0ERABx_A86un7aRA7i-MwgcqD77mQPLVIVqeK-FyOw&oh=03_Q7cD5QFTwiPqLcy5GRzgM8Ou77b-I25m_w5soYbTnCFO31OzEQ&oe=6A2B8BC1.jpg",
  "Ảnh mới/image_1778655692349.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQGfuuAZ_r4QUrEU6TOHB2nXue9cB7zFeRjcW-cIuZWslm27s_pcdbfT7f9zN3OlPY51-KVK_rIu-A&oh=03_Q7cD5QGkjR_YB-1eTr1nPu6PIGqNkbP6cGs-TS-Va7YEVN46qg&oe=6A2B6680.jpg",
  "Ảnh mới/image_1778655692351.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQGPsx4irzd5DGeg6ODAMT1VVlL_ol3citroxpykcXxej_bm36cebM_HxzfdmpxV05zmMtJ0oh3fRA&oh=03_Q7cD5QGGtZsXtVOFcQ-psxRaqVFtJbZVQEll4_gza4LpJmqz5w&oe=6A2B703D.jpg",
  "Ảnh mới/image_1778655692355.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQGS2eU835r7rud7N1hAb6eEUgvtLWb3w1CYsofsJ0UqcZvVEuBGHdrSeQaB-NaHqZrTUd4i_bUfXw&oh=03_Q7cD5QGKl8uKlqnwyB289MHOICK7b-2fHWPa4VqQTJz2sik1RQ&oe=6A2B8990.jpg",
  "Ảnh mới/image_1778655692356.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQHYTet_Di0ekRYMBoI2Ganmuhm2J8WZrguQBulhdCriG1V72vyvBUl4ZNUbmOD4uy73bzD-WAyflw&oh=03_Q7cD5QGDZTqTiS2Eh_HzCT_mX73oRQUh7N0k7m5ExGNzcxiZkw&oe=6A2B805B.jpg",
  "Ảnh mới/image_1778655692359.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQHmXfIqC31CDvHTzw3WG1KDvkS3471oT6HXgYfDO1XH1UlWnaCClC6AYYT_k_jxhlE6KVoI8Qx_SQ&oh=03_Q7cD5QEtJ3zayIczpEa7zdAFa3v1wT_5Va5hj3cvxFHrbY7tww&oe=6A2B6B55.jpg",
  "Ảnh mới/image_1778655692362.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQGUkwKhTp54uHPsaKwUAkQGw8JBxH6KMm-nUNJKXX2PC4ImBzGHxox_3gNfhNQ07iLoU0HTpjZR7A&oh=03_Q7cD5QFxHgwT3ZVAklIllqvJxOgZcfDZEJBxAqAbiOBnAkPxEw&oe=6A2B6BBC.jpg",
  "Ảnh mới/image_1778655692365.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQHZshvYEUfoi4HRBh1VWMVWENijgKSPq0Hm0tLIs6r3TIIuZdkOkt9YYOjNttCvDIEr7dhvDcGnWg&oh=03_Q7cD5QGsm70dg7HgA8ver4gvzmksW11xsL-KGcDFwNm_nY2a0w&oe=6A2B69E6.jpg",
  "Ảnh mới/image_1778655692366.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQFRdKe4MmjsSyW41dXAIafAJjiYxk25VwoGZXScI4FgguawSNN3mKhCi52915lf9BFbE_tbo2V8oA&oh=03_Q7cD5QFDyDlTSXT5m0a0gsh3e8ihWFz9LPqGkF6YvRzZ-L0JQw&oe=6A2B8082.jpg",
  "Ảnh mới/image_1778655692368.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQFp9A_XZQZkUg4kkC-DWV4cVi41UCKbKw5OL6YHFtaJdI8Q515pVTZQh6WxJmeEWKDKVBW3g_VRPA&oh=03_Q7cD5QEMYtLqGf8mh3TwQeNBxsosLz71DXqNYH4H8nzTbeb2Kg&oe=6A2B8402.jpg",
  "Ảnh mới/image_1778655692368.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQGxfqtmpegx3YmOA2bRd-c_ddbnU6I68teKGXlRuB--Fhh6ODQGF9NLtisxXMkKTnTBBFN4xN-_Iw&oh=03_Q7cD5QHWXshKBl5_8MScsoVULSpqx2Uv8fKfLvtAlB-_xDO20g&oe=6A2B7465.jpg",
  "Ảnh mới/image_1778655692370.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQFsb5vLUfO6WdhxxDnYiNZ9whoHQeISuW8Qa-Cycu-M_txYnKnESmNX6CEvMppHCU4612vVbJUSuA&oh=03_Q7cD5QHw9YfkpibSb0aRdNy9ymn8MezW2prqjL4d4llsQzN1cg&oe=6A2B8863.jpg",
  "Ảnh mới/image_1778655692371.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQEz6wXvLVBLmQZ8hhFvT4LmjCFCyu3VcG9KVnetM0SenoNoDoPgngKldUINQ2BnWsPl79pZ62DyYA&oh=03_Q7cD5QHrZ0ogVy01Nwhf7ng3AzeOeFPOnWEr1wX1qd6C7G8SRw&oe=6A2B84C6.jpg",
  "Ảnh mới/image_1778655692374.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQF3RHjY06ECSkPV615dSfiKZdoUmu-3RAKLLYzWRqikX8lTH4E21-SxHbNGiq-XPhSQCU8KTSIclg&oh=03_Q7cD5QEVozNsGL-OJvDxgj7N8pNa0DKfGrzgQD7fvA1mptfQDA&oe=6A2B7632.jpg",
  "Ảnh mới/image_1778655692376.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQEUi1kXB7jibldafd5DH0MHi-HdPcuHLRnc6KYAN8fanLH99Zq2frACUqDX6BY9wwh_UzVH9nv2Vg&oh=03_Q7cD5QFXF-Mh2dwmeVjCh4uKn27FWZkNQFfIkYkSPTUVRSUfzQ&oe=6A2B7008.jpg",
  "Ảnh mới/image_1778655692378.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQHZlVZq-liVacfY9Fnk5QT-OnuaSm5PVnXsGQ4n5tTH5H1I4TRVJNJdX9EgFjApXseaVgIm_Xb0ig&oh=03_Q7cD5QGOiTYAiR0q8qPIu75Nit46576nmHCnYiDhgXN7kSThJw&oe=6A2B88DD.jpg",
  "Ảnh mới/image_1778655692379.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQGUGbt6xlCz1DLzhzBg0jw0giNnoqlLrg42Ou4WCxWhpPN2_T2yq-2KnarwHKPyQBIgq3IWRLMPdA&oh=03_Q7cD5QGGoKzOTxmm6meNRH8nr3iRgNdT_IOmQNXTO-oWdJTZog&oe=6A2B76EB.jpg",
  "Ảnh mới/image_1778655692380.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQHCWkVaiol-q48FhkP1IIn536zo949_j-D_KJUgbVDOwMdCLBwt8Sn_Hm_3NCBn0fNBI4G4fzkCbg&oh=03_Q7cD5QGBgD1-lTkWKC7x4Z_ub72Psqet4RqnZszP7dkLvFjPJg&oe=6A2B7FEB.jpg",
  "Ảnh mới/image_1778655692382.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQFERwQLe_yNFHDuqP9xUoiUX0NOo7smCS7uciF_lwiDIrMmHkjsEIKWSgbhIaFp7ALqcDbWPm-FIA&oh=03_Q7cD5QFGowfOXyVKidkiz39RNQVHBO1unMh8ZuFtk8F63f2UiQ&oe=6A2B7B40.jpg",
  "Ảnh mới/image_1778655692384.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQGuNwNm_WrcEK68VZGdFO6YWr12ArGF-OUU3ypRUtTJZbXS0ZRE_pw7AmKWOKXNYdVcTcAv-ieHow&oh=03_Q7cD5QGm0otgVj1Q9aEeRJopod6NSbVW-4rDf7VHcMrxZWE6EQ&oe=6A2B6659.jpg",
  "Ảnh mới/image_1778655692386.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQEb8qyxwdAEtv5Nys567NQAIcrd3yjBmIMkjV4VN4194-sduEu0kvypQCV9q4QVhgQLMlYlW0700g&oh=03_Q7cD5QH7NqSi950BXtN-GQ78AZXYtT1AExTCbDraGaW9JYfyow&oe=6A2B90E6.jpg",
  "Ảnh mới/image_1778655692387.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQGVOcs1qBp2vV_4DIVXmJEftw3-84UrrxaVcfzKR2MOuyn2ZqiIykVCdNNUzqWBRoZZXN65hrATyg&oh=03_Q7cD5QH5S5o631L01t1TK9X-utx-mQujfYAQQf8QE-YNVv5_RQ&oe=6A2B9185.jpg",
  "Ảnh mới/image_1778655692390.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQGl-kliypPPFT70FlU1l44ecufzxvW7oPn1N8smQOExZ45oE9ps4kBOXmmVZ1FLGBAHMNbiPvJHIw&oh=03_Q7cD5QEHuMHDj0n-Favw2-BD2prtff9xv6MLTco5TU4DRe8hDg&oe=6A2B6477.jpg",
  "Ảnh mới/image_1778655692393.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQF8Dr7XHqcG2wuttT2-1iiV0lH57eirlMOtdsfvBcOscwFI3VP-dXddi2MnAnDrZ_jrOp5UIwR6Rw&oh=03_Q7cD5QF0CspLXyHV63KIUO26Do1DqNaFr-N2vO2lHkpBLkLfnw&oe=6A2B893B.jpg",
  "Ảnh mới/image_1778655692396.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQHkErDOrFv4Miw-c3OMo6Iw49Q8ky-36VQw39BJ6XfpYqqYJTfOUzg3DptR7VPdcO6koiTw0qavqQ&oh=03_Q7cD5QEq-47fJyEV2_wyKClamgb9ZDSOMmUg56mOvVztgPcFdg&oe=6A2B741F.jpg",
  "Ảnh mới/image_1778655692398.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQEchauvb17qlfEDiB4sbFzIgqW_84UhVd2tkBv4qWOQSyk_93G0MJPFlsgv0EZe4qrZFr1wcgArkw&oh=03_Q7cD5QHLDUOte3asgp0wnDMaI4gR5flJ-bQGfxP6qDonjAhOxw&oe=6A2B8ACB.jpg",
];

const featuredItems = [
  featured("Losos teriyaki", "Ryby", 10.9, "assets/losos-teriyaki.jpg"),
  featured("Hovädzie Nambo", "Rezance a ryža", 8.3, "assets/hovadzie-nambo.jpg"),
  featured("Bún Chả bravčové", "Rezance a ryža", 9.2, "assets/bun-cha-bravcove.jpg"),
  featured("Nem Rán závitky", "Vyprážané", 4.9, "assets/zavitky.jpg"),
];

const menuItems = [
  ...variants("Pho polievka", "Polievky", [["kuracie", 7.5], ["hovädzie", 7.9], ["kačacie", 8.9]]),
  ...variants("Bun polievky", "Polievky", [["kuracie", 7.5], ["hovädzie", 7.9], ["krevety", 8.9], ["kačacie", 8.9], ["rybacie", 9.9]]),
  item("Bun Bo Hue", "Polievky", 9.5),
  ...variants("Kórejské polievky", "Polievky", [["kuracie", 7.3], ["hovädzie", 7.9], ["krevety", 8.9], ["kačacie", 8.9]]),
  item("Ostrokyslá (200ml)", "Polievky", 2.2),
  item("Kukuricová (200ml)", "Polievky", 2.2),
  item("Kurací vývar (250ml)", "Polievky", 2.5),
  item("Miso (200ml)", "Polievky", 3.0),
  item("Miso losos (200ml)", "Polievky", 4.0),
  item("Tom Yum malý - kurací", "Polievky", 3.0),
  item("Tom Yum malý - krevetový", "Polievky", 3.5),
  item("Tom Yum malý - tofu", "Polievky", 3.0),
  item("Tom Yum veľký - kurací", "Polievky", 6.5),
  item("Tom Yum veľký - krevetový", "Polievky", 7.7),
  item("Tom Yum veľký - tofu", "Polievky", 6.5),

  item("Šalát vegan", "Šaláty", 6.5),
  item("Šalát kuracie", "Šaláty", 6.9),
  item("Šalát krevety", "Šaláty", 7.9),
  item("Wakame šalát", "Šaláty", 4.5),

  ...variants("Rezance a rizota", "Rezance a ryža", [["kuracie", 6.9], ["hovädzie", 7.5], ["krevety", 7.9], ["kačacie", 8.9]]),
  ...variants("Nam Bo", "Rezance a ryža", [["kuracie", 7.8], ["hovädzie", 8.3], ["krevety", 8.9], ["kačacie", 9.3], ["so závitkami Nem Rán", 8.7]]),
  item("Bun Cha - bravčové", "Rezance a ryža", 9.2),
  item("Bun Cha - Lá Lốt", "Rezance a ryža", 9.2),

  ...variants("Mäso so zeleninou", "Mäso", [["kuracie", 6.3], ["hovädzie", 6.9], ["krevety", 7.9]]),
  ...variants("Mäso so cuketou a kešu", "Mäso", [["kuracie", 6.3], ["hovädzie", 6.9], ["krevety", 7.9], ["kačacie", 8.9]]),
  ...variants("Mäso na arašidoch", "Mäso", [["kuracie", 6.3], ["hovädzie", 6.9], ["krevety", 7.9], ["kačacie", 8.9]]),
  ...variants("Mäso s mangom", "Mäso", [["kuracie", 6.3], ["hovädzie", 6.9], ["krevety", 7.9], ["kačacie", 8.9]]),
  ...variants("Mäso na kari", "Mäso", [["kuracie", 6.3], ["hovädzie", 6.9], ["krevety", 7.9], ["kačacie", 8.9]]),
  ...variants("Mäso so špargľou", "Mäso", [["kuracie", 6.5], ["hovädzie", 6.9], ["krevety", 7.9], ["kačacie", 8.9]]),
  ...variants("Mäso na teriyaki", "Mäso", [["kuracie", 6.3], ["hovädzie", 6.9], ["krevety", 7.9], ["kačacie", 8.9]]),
  ...variants("Pikantné mäso", "Mäso", [["kuracie", 6.3], ["hovädzie", 6.9], ["krevety", 7.9], ["kačacie", 8.9]]),
  ...variants("Horúca panvica", "Mäso", [["kuracie", 7.9], ["hovädzie", 8.9], ["krevety", 8.9], ["kačacie", 8.9], ["losos", 10.9]]),
  ...variants("Mäso na kimchi", "Mäso", [["kuracie", 5.9], ["hovädzie", 6.5], ["krevety", 7.5], ["kačacie", 8.9]]),

  item("Kuracie kúsky 200g", "Vyprážané", 6.5),
  item("Chrumkavé kura 200g", "Vyprážané", 7.0),
  item("Chrumkavá kačica 200g", "Vyprážané", 7.5),
  item("Krevety 5ks", "Vyprážané", 5.9),
  item("Syr hranolky 250g", "Vyprážané", 6.9),
  item("So závitkami Nem Rán 3ks", "Vyprážané", 4.9),
  item("Kuracie tempura 250g", "Vyprážané", 6.5),

  ...variants("Čerstvé jarné závitky", "Závitky", [["kuracie", 4.5], ["hovädzie", 5.0], ["krevety", 5.0], ["tofu", 4.5]]),

  ...variants("Vegánske pho polievky", "Vegánske", [["sójové kačacie", 8.5], ["tofu", 7.5]]),
  ...variants("Vegánske bun polievky", "Vegánske", [["sójové kačacie", 8.9], ["tofu", 7.3]]),
  ...variants("Vegánske rezance a rizota", "Vegánske", [["sójové kačacie", 8.5], ["tofu", 7.5]]),
  ...variants("Vegánske Nam Bo", "Vegánske", [["sójové kačacie", 8.5], ["tofu", 7.5]]),
  ...variants("Sójové mäso so zeleninou", "Vegánske", [["sójové kačacie", 7.5], ["tofu", 6.3]]),
  ...variants("Veg. plátky so cuketou a kešu", "Vegánske", [["sójové kačacie", 7.5], ["tofu", 6.3]]),
  item("Tofu Hanoi", "Vegánske", 6.9),
  ...variants("Vegánske Kungpao", "Vegánske", [["sójové kačacie", 7.9], ["tofu", 6.9]]),
  ...variants("Vegánske Mango", "Vegánske", [["sójové kačacie", 7.5], ["tofu", 6.3]]),
  ...variants("Vegánske Kari", "Vegánske", [["sójové kačacie", 7.5], ["tofu", 6.3]]),
  ...variants("Vegánske Arašidy", "Vegánske", [["sójové kačacie", 7.5], ["tofu", 6.3]]),
  ...variants("Sójové mäso so špargľou", "Vegánske", [["sójové kačacie", 7.5], ["tofu", 6.3]]),
  ...variants("Vegánske Teriyaki", "Vegánske", [["sójové kačacie", 7.5], ["tofu", 6.3]]),
  ...variants("Vegánske na kimchi", "Vegánske", [["sójové kačacie", 7.9], ["tofu", 6.9]]),

  item("Ryža 120g", "Prílohy", 1.8),
  item("Ryžové rezance 180g", "Prílohy", 2.7),
  item("Opekané rezance 180g", "Prílohy", 2.5),
  item("Hranolky 180g", "Prílohy", 2.0),

  ...variants("Maki 8ks", "Sushi", [["losos", 4.9], ["losos - avokádo", 4.9], ["tuna", 5.9], ["krevety", 4.9], ["krevety tempura", 5.0], ["surimi - krab", 4.0], ["unagi", 5.0], ["avokádo", 3.9], ["uhorka", 3.0], ["mango", 3.0], ["reďkovka", 3.0]]),
  ...variants("Nigiri 2ks", "Sushi", [["losos", 4.9], ["tuna", 5.5], ["unagi", 5.5], ["krevety", 4.9], ["avokádo", 3.9], ["surimi - krab", 3.9]]),
  item("Futomaki Fish 12ks", "Sushi", 12.9),
  item("Futomaki Krevety tempura 12ks", "Sushi", 12.9),
  item("Futomaki Krevety 12ks", "Sushi", 11.9),
  item("Futomaki Veggie 12ks", "Sushi", 10.9),
  item("Futomaki Samurai 12ks", "Sushi", 10.9),
  item("Salmon Tempura Big Roll 10ks", "Sushi", 12.9),
  item("Tuna Tempura Big Roll 10ks", "Sushi", 12.9),
  item("Big Ebi Tempura Big Roll 10ks", "Sushi", 11.9),
  item("Samurai Tempura Big Roll 10ks", "Sushi", 10.9),
  item("Veggie Tempura Big Roll 10ks", "Sushi", 10.9),
  item("Sashimi losos 5ks", "Sushi", 13.5),
  item("Sashimi tuna 5ks", "Sushi", 14.5),
  item("Sashimi mix 5ks", "Sushi", 15.5),
  item("ISO Alaska 8ks", "Sushi", 10.5),
  item("ISO Boston 8ks", "Sushi", 10.9),
  item("ISO California 8ks", "Sushi", 9.5),
  item("ISO Ebi Tempura 8ks", "Sushi", 10.5),
  item("ISO Fukuyama 8ks", "Sushi", 10.5),
  item("ISO Unagi 8ks", "Sushi", 11.5),
  item("ISO Veggie Avokádo 8ks", "Sushi", 9.9),
  item("Dragon Fire 8ks", "Sushi", 13.5),
  item("Phoenix Fire 8ks", "Sushi", 13.5),
  item("Avokádo Special Roll 8ks", "Sushi", 13.5),
  item("Sizzling Temptation 8ks", "Sushi", 12.5),
  item("Atula Ebi 8ks", "Sushi", 13.5),
  item("Sake Fancy 8ks", "Sushi", 12.5),
  item("Veggie Lover 8ks", "Sushi", 13.5),
  item("Unagi Special Roll 8ks", "Sushi", 13.5),
  item("Rainbow River 8ks", "Sushi", 12.5),
  item("Hanoi Veggie", "Sushi", 24.0),
  item("Salmon Lover", "Sushi", 13.5),
  item("Fancy Veggie", "Sushi", 18.5),
  item("Alaska Adventures", "Sushi", 21.0),
  item("Blazing Love", "Sushi", 28.5),
  item("Crispy Rocket", "Sushi", 29.0),
  item("Saigon Lover", "Sushi", 75.0),
  item("Tuna / Salmon Tartare", "Sushi", 11.9),

  item("Sushi bowl - Losos", "Sushi bowls", 12.9),
  item("Sushi bowl - Tuna", "Sushi bowls", 13.9),
  item("Sushi bowl - Ebi Tempura", "Sushi bowls", 13.9),
  item("Sushi bowl - Kuracia Tempura", "Sushi bowls", 10.9),
  item("Sushi bowl - Veggie Lover Bowl", "Sushi bowls", 12.9),
  item("Sushi bowl - Lover Bowl", "Sushi bowls", 14.9),

  item("Maki Set", "Sushi sety", 12.0),
  item("Yeme", "Sushi sety", 7.5),
  item("Vip Box", "Sushi sety", 11.5),
].map((entry) => ({
  ...entry,
  key: makeKey(entry.name, entry.category, entry.price),
}));

const els = {
  featuredGrid: document.querySelector("#featured-grid"),
  featuredCount: document.querySelector("#featured-count"),
  menuCount: document.querySelector("#menu-count"),
  menuList: document.querySelector("#menu-list"),
  menuPagination: document.querySelector("#menu-pagination"),
  categoryFilter: document.querySelector("#category-filter"),
  searchInput: document.querySelector("#search-input"),
  cartItems: document.querySelector("#cart-items"),
  cartTotal: document.querySelector("#cart-total"),
  clearCart: document.querySelector("#clear-cart"),
  whatsappLink: document.querySelector("#whatsapp-link"),
  copyInvoice: document.querySelector("#copy-invoice"),
  invoicePreview: document.querySelector("#invoice-preview"),
  customForm: document.querySelector("#custom-form"),
  customerForm: document.querySelector("#customer-form"),
  photoGallery: document.querySelector("#photo-gallery"),
  imageDialog: document.querySelector("#image-dialog"),
  dialogImage: document.querySelector("#dialog-image"),
  dialogClose: document.querySelector("#dialog-close"),
  copyDialog: document.querySelector("#copy-dialog"),
  copyDialogText: document.querySelector("#copy-dialog-text"),
  copyDialogSelect: document.querySelector("#copy-dialog-select"),
  copyDialogClose: document.querySelector("#copy-dialog-close"),
  reservationForm: document.querySelector("#reservation-form"),
};

let activeCategory = "Všetko";
let menuPage = 1;
let menuPageSize = getMenuPageSize();
let cart = loadCart();

renderStaticSections();
renderCategoryFilter();
renderMenu();
renderCart();
bindEvents();

function item(name, category, price) {
  return { name, category, price };
}

function featured(name, category, price, image) {
  return { name, category, price, image, key: makeKey(name, category, price) };
}

function variants(base, category, options) {
  return options.map(([variantName, price]) => item(`${base} - ${variantName}`, category, price));
}

function makeKey(name, category, price) {
  return normalizeText(`${category}-${name}-${price}`).replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function normalizeText(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function formatCurrency(value) {
  return new Intl.NumberFormat("sk-SK", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(Number(value) || 0);
}

function getMenuPageSize() {
  return window.matchMedia("(max-width: 560px)").matches ? MOBILE_MENU_PAGE_SIZE : DESKTOP_MENU_PAGE_SIZE;
}

function asset(path) {
  return encodeURI(path).replace(/#/g, "%23");
}

function renderStaticSections() {
  els.featuredCount.textContent = `${featuredItems.length} položiek`;
  els.featuredGrid.replaceChildren(
    ...featuredItems.map((entry) => {
      const card = document.createElement("article");
      card.className = "featured-card";

      const img = document.createElement("img");
      img.src = asset(entry.image);
      img.alt = entry.name;
      img.loading = "lazy";
      img.dataset.image = entry.image;

      const body = document.createElement("div");
      body.className = "featured-body";

      const title = document.createElement("h3");
      title.textContent = entry.name;

      const meta = document.createElement("div");
      meta.className = "featured-meta";
      meta.innerHTML = `<span>${entry.category}</span><strong class="price">${formatCurrency(entry.price)}</strong>`;

      const button = document.createElement("button");
      button.className = "add-button";
      button.type = "button";
      button.textContent = "Pridať";
      button.dataset.action = "add-featured";
      button.dataset.key = entry.key;

      body.append(title, meta, button);
      card.append(img, body);
      return card;
    })
  );

  els.photoGallery.replaceChildren(
    ...dishPhotos.map((path, index) => imageEl(path, `Foto jedla ${index + 1}`))
  );
}

function imageEl(path, alt) {
  const img = document.createElement("img");
  img.src = asset(path);
  img.alt = alt;
  img.loading = "lazy";
  img.dataset.image = path;
  return img;
}

function renderCategoryFilter() {
  const categories = ["Všetko", ...new Set(menuItems.map((entry) => entry.category))];
  els.categoryFilter.replaceChildren(
    ...categories.map((category) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = category;
      button.className = category === activeCategory ? "active" : "";
      button.dataset.category = category;
      return button;
    })
  );
}

function renderMenu() {
  const query = normalizeText(els.searchInput.value);
  const visibleItems = menuItems.filter((entry) => {
    const matchesCategory = activeCategory === "Všetko" || entry.category === activeCategory;
    const matchesSearch = !query || normalizeText(`${entry.name} ${entry.category}`).includes(query);
    return matchesCategory && matchesSearch;
  });

  menuPageSize = getMenuPageSize();
  const totalPages = Math.max(1, Math.ceil(visibleItems.length / menuPageSize));
  menuPage = Math.min(Math.max(menuPage, 1), totalPages);
  els.menuCount.textContent = visibleItems.length
    ? `${visibleItems.length} položiek · strana ${menuPage}/${totalPages}`
    : "0 položiek";

  if (!visibleItems.length) {
    const empty = document.createElement("div");
    empty.className = "cart-empty";
    empty.textContent = "Žiadna položka";
    els.menuList.replaceChildren(empty);
    els.menuPagination.replaceChildren();
    return;
  }

  const startIndex = (menuPage - 1) * menuPageSize;
  const pageItems = visibleItems.slice(startIndex, startIndex + menuPageSize);

  els.menuList.replaceChildren(
    ...pageItems.map((entry) => {
      const row = document.createElement("article");
      row.className = "menu-row";

      const text = document.createElement("div");
      const title = document.createElement("h3");
      title.textContent = entry.name;
      const category = document.createElement("small");
      category.textContent = entry.category;
      text.append(title, category);

      const price = document.createElement("strong");
      price.className = "price";
      price.textContent = formatCurrency(entry.price);

      const add = document.createElement("button");
      add.className = "row-add";
      add.type = "button";
      add.textContent = "+";
      add.ariaLabel = `Pridať ${entry.name}`;
      add.dataset.action = "add-menu";
      add.dataset.key = entry.key;

      row.append(text, price, add);
      return row;
    })
  );

  renderMenuPagination(totalPages);
}

function renderMenuPagination(totalPages) {
  if (totalPages <= 1) {
    els.menuPagination.replaceChildren();
    return;
  }

  const nav = document.createElement("nav");
  nav.className = "menu-pagination";
  nav.setAttribute("aria-label", "Stránkovanie menu");

  nav.append(
    paginationButton("‹ Predošlá", menuPage - 1, menuPage === 1),
    ...paginationPages(totalPages),
    paginationButton("Ďalšia ›", menuPage + 1, menuPage === totalPages)
  );

  els.menuPagination.replaceChildren(nav);
}

function paginationButton(label, page, disabled = false, active = false) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = label;
  button.disabled = disabled;
  button.className = active ? "active" : "";
  button.dataset.menuPage = String(page);
  if (active) button.setAttribute("aria-current", "page");
  return button;
}

function paginationPages(totalPages) {
  const pages = [1, menuPage - 1, menuPage, menuPage + 1, totalPages]
    .filter((page) => page >= 1 && page <= totalPages)
    .filter((page, index, list) => list.indexOf(page) === index)
    .sort((a, b) => a - b);

  const controls = [];
  pages.forEach((page, index) => {
    const previous = pages[index - 1];
    if (previous && page - previous > 1) {
      const gap = document.createElement("span");
      gap.className = "pagination-gap";
      gap.textContent = "…";
      controls.push(gap);
    }
    controls.push(paginationButton(String(page), page, false, page === menuPage));
  });
  return controls;
}

function renderCart() {
  saveCart();
  const total = cart.reduce((sum, entry) => sum + entry.price * entry.qty, 0);
  els.cartTotal.textContent = formatCurrency(total);

  if (!cart.length) {
    const empty = document.createElement("div");
    empty.className = "cart-empty";
    empty.textContent = "Košík je prázdny";
    els.cartItems.replaceChildren(empty);
  } else {
    els.cartItems.replaceChildren(
      ...cart.map((entry) => {
        const row = document.createElement("article");
        row.className = "cart-item";

        const text = document.createElement("div");
        const title = document.createElement("h3");
        title.textContent = entry.name;
        const meta = document.createElement("small");
        meta.textContent = `${formatCurrency(entry.price)} / ks · ${formatCurrency(entry.price * entry.qty)}`;
        text.append(title, meta);

        const control = document.createElement("div");
        control.className = "qty-control";

        const minus = document.createElement("button");
        minus.className = "qty-button";
        minus.type = "button";
        minus.textContent = "−";
        minus.dataset.action = "decrease";
        minus.dataset.key = entry.key;

        const qty = document.createElement("span");
        qty.textContent = entry.qty;

        const plus = document.createElement("button");
        plus.className = "qty-button";
        plus.type = "button";
        plus.textContent = "+";
        plus.dataset.action = "increase";
        plus.dataset.key = entry.key;

        control.append(minus, qty, plus);
        row.append(text, control);
        return row;
      })
    );
  }

  const invoice = buildInvoice();
  els.invoicePreview.textContent = invoice;
  const canSend = cart.length > 0;
  els.whatsappLink.classList.toggle("disabled", !canSend);
  els.whatsappLink.setAttribute("aria-disabled", String(!canSend));
  els.whatsappLink.href = canSend
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(invoice)}`
    : "#";
}

function addToCart(entry, qty = 1) {
  const cleanQty = Math.max(1, Number.parseInt(qty, 10) || 1);
  const existing = cart.find((cartEntry) => cartEntry.key === entry.key);
  if (existing) {
    existing.qty += cleanQty;
  } else {
    cart.push({
      key: entry.key,
      name: entry.name,
      category: entry.category,
      price: Number(entry.price) || 0,
      qty: cleanQty,
    });
  }
  renderCart();
}

function setQuantity(key, nextQty) {
  const entry = cart.find((cartEntry) => cartEntry.key === key);
  if (!entry) return;
  entry.qty = nextQty;
  if (entry.qty <= 0) {
    cart = cart.filter((cartEntry) => cartEntry.key !== key);
  }
  renderCart();
}

function buildInvoice() {
  const form = new FormData(els.customerForm);
  const lines = [
    "Hoang Tofu - objednávka",
    "Vajnorská 10595/98F, 831 04 Nové Mesto",
    "",
  ];

  if (cart.length) {
    lines.push("Položky:");
    cart.forEach((entry, index) => {
      lines.push(`${index + 1}. ${entry.name} x${entry.qty} = ${formatCurrency(entry.price * entry.qty)}`);
    });
  } else {
    lines.push("Položky: -");
  }

  const total = cart.reduce((sum, entry) => sum + entry.price * entry.qty, 0);
  lines.push("", `Spolu: ${formatCurrency(total)}`, "");
  lines.push(`Typ: ${form.get("orderType") || "Osobný odber"}`);

  const details = [
    ["Meno", form.get("customerName")],
    ["Telefón", form.get("customerPhone")],
    ["Adresa", form.get("customerAddress")],
    ["Čas", form.get("pickupTime")],
    ["Poznámka", form.get("note")],
  ];

  details.forEach(([label, value]) => {
    const clean = String(value || "").trim();
    if (clean) lines.push(`${label}: ${clean}`);
  });

  return lines.join("\n");
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const actionTarget = event.target.closest("[data-action]");
    if (actionTarget) {
      const { action, key } = actionTarget.dataset;
      if (action === "add-menu") {
        const entry = menuItems.find((candidate) => candidate.key === key);
        if (entry) addToCart(entry);
      }
      if (action === "add-featured") {
        const entry = featuredItems.find((candidate) => candidate.key === key);
        if (entry) addToCart(entry);
      }
      if (action === "increase") {
        const entry = cart.find((candidate) => candidate.key === key);
        if (entry) setQuantity(key, entry.qty + 1);
      }
      if (action === "decrease") {
        const entry = cart.find((candidate) => candidate.key === key);
        if (entry) setQuantity(key, entry.qty - 1);
      }
    }

    const image = event.target.closest("img[data-image]");
    if (image && els.imageDialog.showModal) {
      els.dialogImage.src = image.src;
      els.dialogImage.alt = image.alt;
      els.imageDialog.showModal();
    }
  });

  els.categoryFilter.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    menuPage = 1;
    renderCategoryFilter();
    renderMenu();
  });

  els.searchInput.addEventListener("input", () => {
    menuPage = 1;
    renderMenu();
  });

  els.menuPagination.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-menu-page]");
    if (!button || button.disabled) return;
    menuPage = Number.parseInt(button.dataset.menuPage, 10) || 1;
    renderMenu();
    document.querySelector("#menu").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  window.addEventListener("resize", debounce(() => {
    const nextPageSize = getMenuPageSize();
    if (nextPageSize === menuPageSize) return;
    menuPage = 1;
    menuPageSize = nextPageSize;
    renderMenu();
  }, 160));

  els.clearCart.addEventListener("click", () => {
    cart = [];
    renderCart();
  });

  els.customForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#custom-name").value.trim();
    const price = Number.parseFloat(document.querySelector("#custom-price").value.replace(",", ".")) || 0;
    const qty = Number.parseInt(document.querySelector("#custom-qty").value, 10) || 1;
    if (!name) return;
    const entry = {
      name,
      category: "Vlastná položka",
      price,
      key: makeKey(name, "Vlastná položka", price),
    };
    addToCart(entry, qty);
    els.customForm.reset();
    document.querySelector("#custom-qty").value = "1";
  });

  els.customerForm.addEventListener("input", renderCart);
  els.customerForm.addEventListener("change", renderCart);

  els.copyInvoice.addEventListener("click", async () => {
    const invoice = buildInvoice();
    try {
      await navigator.clipboard.writeText(invoice);
      els.copyInvoice.textContent = "Skopírované";
      window.setTimeout(() => {
        els.copyInvoice.textContent = "Kopírovať objednávku";
      }, 1400);
    } catch {
      showCopyDialog(invoice);
    }
  });

  els.dialogClose.addEventListener("click", () => els.imageDialog.close());
  els.imageDialog.addEventListener("click", (event) => {
    if (event.target === els.imageDialog) els.imageDialog.close();
  });

  els.copyDialogClose.addEventListener("click", () => els.copyDialog.close());
  els.copyDialogSelect.addEventListener("click", () => {
    els.copyDialogText.focus();
    els.copyDialogText.select();
  });
  els.copyDialog.addEventListener("click", (event) => {
    if (event.target === els.copyDialog) els.copyDialog.close();
  });

  if (els.reservationForm) {
    els.reservationForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = new FormData(els.reservationForm);
      const message = [
        "Hoang Tofu - rezervácia stola",
        `Meno: ${String(form.get("reservationName") || "").trim()}`,
        `Telefón: ${String(form.get("reservationPhone") || "").trim()}`,
        `Dátum: ${String(form.get("reservationDate") || "").trim()}`,
        `Čas: ${String(form.get("reservationTime") || "").trim()}`,
        `Počet osôb: ${String(form.get("reservationGuests") || "").trim()}`,
        String(form.get("reservationNote") || "").trim()
          ? `Poznámka: ${String(form.get("reservationNote") || "").trim()}`
          : "",
      ].filter(Boolean).join("\n");

      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    });
  }
}

function showCopyDialog(invoice) {
  els.copyDialogText.value = invoice;
  if (els.copyDialog.showModal) {
    els.copyDialog.showModal();
  } else {
    els.copyDialog.setAttribute("open", "");
  }
  els.copyDialogText.focus();
  els.copyDialogText.select();
}

function debounce(callback, wait) {
  let timeoutId;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => callback(...args), wait);
  };
}

function saveCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

function loadCart() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((entry) => entry && entry.key && entry.name && Number(entry.qty) > 0);
  } catch {
    return [];
  }
}
