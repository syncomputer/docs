# Synergy Computer v.1.0
<div id="MessageContainer-284389" class="Message"><p>&nbsp;</p>
<img src="https://i.imgur.com/0X192sZ.png" alt="snapshot">
<p><strong><a href="https://rdpstudio.lanzous.com/iHqR1ocqloh"><img src="https://greenteaosforkbyrdpstudio.github.io/blog/picture/down.png" alt="Download"></a>&nbsp;</strong></p>
<p><strong>Specifications:</strong><strong><br></strong></p>
<p>&nbsp;</p>
<ul>
<li>29-bit architecture.</li>
<li>31 instructions</li>
<li>Runs at 1.5hz on average</li>
<li>255 RAM addresses (8 frame read/write)</li>
<li>889 ROM addresses (8 frame read/write)</li>
<li>Fully functional piston/DRAY based display, originally designed by Sandwichlizard, and heavily modified by me.</li>
<li>29-bit Binary &gt; BCD converter</li>
<li>29-bit BCD &gt; Binary converter</li>
<li>2 frame per bit adder subtractor.&nbsp;</li>
<li>10 registers</li>
</ul>
<p>&nbsp;</p>
<p><strong>Possible future changes/additions:</strong></p>
<p>&nbsp;</p>
<ul>
<li>negative &nbsp;handling</li>
<li>random number generator</li>
<li>improvements to IF statement (allow user defined args).</li>
<li><span>Storing program data in RAM instead of ROM. I want to create 2-dimensional RAM first.</span></li>
<li>INPUT CHAR/INT --&gt; RAM (without using a register value to define RAM address)</li>
<li>WRITE CONSTANT --&gt; REG</li>
<li>IF &lt;= JUMP</li>
<li>IF &gt;= JUMP</li>
<li>Expanding ROM. The Y address only uses 3 of the 5 alocated bits. I could expand the ROM from 889 addresses to 3937.&nbsp;</li>
<li>Expanding to 15 (or possibly even 63) registers.</li>
<li><span>Possibly changing the ALU instructions so that REGA and REGB can both be defined in ARGA. Thus giving space to define a destination register in ARGB. Currently, all ALU operations are A ? B --&gt; A.</span></li>
</ul>
<p>&nbsp;</p>
<p><strong>Instruction Architecture:</strong></p>
<p>&nbsp;</p>
<p>Instructions are 29 bits in length. This is because FILT technology holds 30 wavelengths. The 30th bit (leftmost) is used to represent 0.</p>
<p>&nbsp;</p>
<p><span>The first 5 bits are control bits:</span></p>
<p>[00000][...................][....................]</p>
<p>&nbsp;<span>&nbsp;</span></p>
<p><span><span>The next 12 bits are ARGA:</span></span></p>
<p>[........][000000000000][...................]</p>
<p>&nbsp;</p>
<p><span>The final 12 bits are ARGB:</span></p>
<p><span>[........][...................][000000000000]</span></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>Assembler:</strong></p>
<p><strong>&nbsp;</strong></p>
<p>The assembler with usage instructions can be found in the public editon zip.</p>
<p>&nbsp;</p>
<p><span class="underline">Using the assembler:</span></p>
<p>&nbsp;</p>
<p>1. Transfer assembler contents into your Powder Toy .exe folder.&nbsp;</p>
<p>2. Create a file in this folder with the .scm extention.&nbsp;</p>
<p>3. Open file using a text editor (ie. notepad++)</p>
<p>4. Write assembly code. (syntax specifications found in above link)&nbsp;</p>
<p>5. Open the assembler (SYNASM.exe)</p>
<p>6. type the filename (*.scm)</p>
<p>7. If the file assembles successfully, a *.sc file of the same name will be created in the Powder Toy .exe folder. This file will contain all the assembled binary information for all of the instructions.</p>
<p>&nbsp;</p>
<p><span class="underline">Example program:&nbsp;</span></p>
<p>&nbsp;</p>
<p>DCO "@cTHIS PROGRAM WILL GENERATE THE FIBONACCInSEQUENCE...nn" ; <em>ends at 14.</em><br>DB 0x1, 0x0 ; <em>puts 0 in RAM1</em><br>DB 0x2, 0x1 ; <em>puts 1 in RAM2</em><br>LD 0x1, 0x1 ; <em>loads RAM1 to register1</em><br>LD 0x2, 0x2 ; <em>loads RAM2 to register2</em><br>ADD 0x1, 0x2 ; <em>adds register 1 and register 2</em><br>DIR 0x1, NUL ; <em>displays the result from register 1</em><br>DCO "@, " ;<br>ADD 0x2, 0x1 ; <em>adds register 2 and register 1</em><br>DIR 0x2, NUL ; <em>displays the result from register 2</em><br>DCO "@, " ;<br>JMP 0x7, 0x13 ; <em>jumps back to the first addition</em></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>LUA script for importing *.sc information into Synergy Computer:</strong></p>
<p><strong>&nbsp;</strong></p>
<p>The LUA script that will allow you to import the *.sc file into Synergy Computer's ROM. The script sends the first instruction of the program to the address 001110000001 (c7, r1), the second instruction to 001110000010 (c7, r2) and so on. The 128th line of the program will flow over onto 001100000001 (c6, r1), and so on. This computer does not shift columns automatically, so you will be required to use JMP commands on r127 of each collumn. (ie. from c7, r127: JMP 0x6, 0x1 ;)</p>
<p>That LUA script can found in the public editon zip.</p>
<p>&nbsp;</p>
<p><span>&nbsp;</span></p>
<p><span class="underline">Using the LUA script:&nbsp;</span></p>
<p><span>&nbsp;</span></p>
<p><span>1. Move .lua file to Powder Toy folder. Rename it synergy.lua. (or anything really)</span></p>
<p><span>2. Open Synergy Computer, and type &lt;dofile("synergy.lua")&gt; into the LUA console</span></p>
<p>3. Enter the name of the .sc program (without the .sc extention).&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>Instructions</strong><span> (as named by oldmud0):</span></p>
<p><strong>&nbsp;</strong></p>
<p><strong>00001: DB</strong></p>
<ul>
<li><span>Write to RAM with constant.</span></li>
<li><span>ARGA = RAM address</span></li>
<li>ARGB = Constant value</li>
</ul>
<p>&nbsp;</p>
<p><strong>00010: SR</strong></p>
<ul>
<li>Store to RAM from REG</li>
<li><span>ARGA = RAM address</span></li>
<li>ARGB = REG address</li>
</ul>
<p>&nbsp;</p>
<p><strong>00011: LD</strong></p>
<ul>
<li><span>Load to REG from RAM</span></li>
<li><span>ARGA = RAM address</span></li>
<li>ARGB = REG address</li>
</ul>
<p>&nbsp;</p>
<p><strong>00100: MOV</strong></p>
<ul>
<li>Copy data from REG to REG</li>
<li><span>ARGA = REGA address (copied)</span></li>
<li>ARGB = REGB address (pasted)</li>
</ul>
<p>&nbsp;</p>
<p><strong>00101: ADD&nbsp;</strong></p>
<ul>
<li>ADD REGA, REGB --&gt; REGA</li>
<li><span>ARGA = REGA address</span></li>
<li>ARGB = REGB address</li>
</ul>
<p>&nbsp;</p>
<p><strong>00110: SUB</strong></p>
<ul>
<li>SUB&nbsp;REGA FROM REGB --&gt; REGA</li>
<li><span>ARGA = REGA address</span></li>
<li>ARGB = REGB address</li>
</ul>
<p>&nbsp;</p>
<p><strong>00111: SUBC&nbsp;</strong></p>
<ul>
<li><span>SUBTRACT COLOR REGB FROM REGA --&gt; REGA</span></li>
<li><span>ARGA = REGA address</span></li>
<li>ARGB = REGB address</li>
</ul>
<p><span>&nbsp;</span></p>
<p><span><span><strong>01000: INC&nbsp;</strong></span></span></p>
<ul>
<li><span><span>INCREMENT REGA --&gt; REGA</span></span></li>
<li><span>ARGA = REGA address</span></li>
<li><span><span><span><span><span><span>ARGB = null</span></span></span></span></span></span></li>
</ul>
<p><span><span><span><span><span><span>&nbsp;</span></span></span></span></span></span></p>
<p><strong>01001: DEC</strong></p>
<ul>
<li><span>DECREMENT REGA --&gt; REGA</span></li>
<li><span>ARGA = REGA address</span></li>
<li><span>ARGB = null</span></li>
</ul>
<p><span>&nbsp;</span></p>
<p><strong>01010: SHR</strong></p>
<ul>
<li><span>RIGHT SHIFT&nbsp;REGA --&gt; REGA</span></li>
<li><span>ARGA = REGA address</span></li>
<li><span>ARGB = null</span></li>
</ul>
<p><span>&nbsp;</span></p>
<p><span><strong>01011: SHL&nbsp;</strong></span></p>
<ul>
<li><span>LEFT SHIFT REGA --&gt; REGA</span></li>
<li><span>ARGA = REGA address</span></li>
<li><span>ARGB = null</span></li>
</ul>
<p><span>&nbsp;</span></p>
<p><span><strong>01100: NOT&nbsp;</strong></span></p>
<ul>
<li><span>NOT REGA --&gt; REGA</span></li>
<li><span>ARGA = REGA address</span></li>
<li>ARGB = null</li>
</ul>
<p>&nbsp;</p>
<p><strong>01101: NAND</strong></p>
<ul>
<li>NAND REGA, REGB --&gt; REGA</li>
<li><span>ARGA = REGA address</span></li>
<li>ARGB = REGB address</li>
</ul>
<p>&nbsp;</p>
<p><strong>01110</strong>:&nbsp;<strong>XOR</strong></p>
<ul>
<li>XOR&nbsp;REGA, REGB --&gt; REGA</li>
<li><span>ARGA = REGA address</span></li>
<li>ARGB = REGB address</li>
</ul>
<p><span><span><span>&nbsp;</span></span></span></p>
<p><strong>01111</strong>:&nbsp;<strong>OR</strong></p>
<ul>
<li>OR&nbsp;REGA, REGB --&gt; REGA</li>
<li><span>ARGA = REGA address</span></li>
<li>ARGB = REGB address</li>
</ul>
<p>&nbsp;</p>
<p><strong>10000</strong>:&nbsp;<strong>AND</strong></p>
<ul>
<li>AND REGA, REGB --&gt; REGA</li>
<li><span>ARGA = REGA address</span></li>
<li>ARGB = REGB address</li>
</ul>
<p><span>&nbsp;</span></p>
<p><span><strong>10001: DCO&nbsp;</strong></span></p>
<ul>
<li><span>Output to display from ROM [CHAR]</span></li>
<li><span>ARGA = CHAR data. 2x6-bit addresses</span></li>
<li>ARGB = CHAR data. 2x6-bit addresses</li>
</ul>
<p><span>Charset addresses:</span></p>
<p><span>&nbsp;</span></p>
<p><span><img src="http://i.imgur.com/fhczTVw.png" alt="" width="881" height="919"></span></p>
<p><span>&nbsp;</span></p>
<p><span><span><span><span><span><span><strong>10010: DCR&nbsp;</strong></span></span></span></span></span></span></p>
<ul>
<li><span><span><span><span><span><span>Output to display from REGA [CHAR]</span></span></span></span></span></span></li>
<li><span>ARGA = REGA address</span></li>
<li><span>ARGB = null</span></li>
</ul>
<p>&nbsp;</p>
<p><strong>10011: DCM&nbsp;</strong></p>
<ul>
<li>Output to display from RAMA [CHAR]</li>
<li><span>ARGA = RAMA address</span></li>
<li><span>ARGB = null</span></li>
</ul>
<p><span>&nbsp;</span></p>
<p><span><strong>10100: DCP&nbsp;</strong></span></p>
<ul>
<li><span>Output to display from RAM(REGA) [CHAR]</span></li>
<li><span>Uses the value stored in REGA as a pointer for RAM.&nbsp;</span></li>
<li><span>ARGA = REGA address</span></li>
<li><span>ARGB = null</span></li>
</ul>
<p><span>&nbsp;</span></p>
<p><span><strong>10101: LDP&nbsp;</strong></span></p>
<ul>
<li><span>Load to register from RAM(REGA) --&gt; REGB</span></li>
<li>Uses the value stored in REGA as a pointer for RAM.&nbsp;</li>
<li><span>ARGA = REGA address</span></li>
<li>ARGB = REGB address</li>
</ul>
<p>&nbsp;</p>
<p><strong>10110: SP</strong></p>
<ul>
<li>Store to RAM(REGA) from REGB</li>
<li>Uses the value stored in REGA as a pointer for RAM.&nbsp;</li>
<li><span>ARGA = REGA address</span></li>
<li>ARGB = REGB address</li>
</ul>
<p>&nbsp;</p>
<p><strong>10111: JNE</strong></p>
<ul>
<li>IF REG1 != REG2, JUMP</li>
<li><span>This instruction will always compare information in REG1 and REG2. I hope to improve this in the future to allow any registers to be compared.</span></li>
<li><span>ARGA = null</span></li>
<li>ARGB = ROM address. This address does not use the 2 most significant bits.</li>
</ul>
<p><span>&nbsp;</span></p>
<p><span>Unused: &nbsp;</span></p>
<p><span>[00][...][.......]</span></p>
<p><span>&nbsp;</span></p>
<p><span>Specifies the collumn for ROM address. 1-7 This computer uses 127x7 ROM. Thus, two addresses required:</span></p>
<p>[..][000][.......]</p>
<p><span>&nbsp;</span></p>
<p><span>Specifies the row for the ROM address. 1-127:</span></p>
<p>[..][...][0000000]</p>
<p>&nbsp;</p>
<p><strong>11000: JE</strong></p>
<ul>
<li><span>IF REG1 == REG2, JUMP</span></li>
<li><span>Same as above.</span></li>
</ul>
<p><span>&nbsp;</span></p>
<p><span><strong>11001: JMP</strong></span></p>
<ul>
<li><span>Unconditional JUMP.&nbsp;</span></li>
<li><span>Same as above.</span></li>
</ul>
<p><span>&nbsp;</span></p>
<p><span><strong>11010: ICP</strong></span></p>
<ul>
<li><span>Store to RAM(REGA) from display input [CHAR]</span></li>
<li><span><span>Stores CHAR data entered by the user, to RAM.&nbsp;</span></span></li>
<li>Uses the value stored in REGA as a pointer for RAM.&nbsp;</li>
<li><span>ARGA: REGA address</span></li>
<li><span>ARGB: null</span></li>
</ul>
<p><span>&nbsp;</span></p>
<p><span><strong>11011: DIR</strong></span></p>
<ul>
<li><span>Output to display from REGA [INT]</span></li>
<li><span>Sends integer data to display.</span></li>
<li><span>ARGA: REGA address</span></li>
<li><span>ARGB: null</span></li>
</ul>
<p><span>&nbsp;</span></p>
<p><span><strong>11100: DIM</strong></span></p>
<ul>
<li><span>Output to display from RAMA [INT]</span></li>
<li><span>Sends integer data to display from RAM</span></li>
<li><span>ARGA: RAMA address</span></li>
<li><span>ARGB: null</span></li>
</ul>
<p>&nbsp;</p>
<p><span><strong>11101: DIP</strong></span></p>
<ul>
<li><span>Output to display from RAM(REGA) [INT]</span></li>
<li><span><span>Outputs integer data to the display from RAM(REGA).</span></span></li>
<li>Uses the value stored in REGA as a pointer for RAM.&nbsp;</li>
<li><span>ARGA: REGA address</span></li>
<li><span>ARGB: null</span></li>
</ul>
<p><span><span><span><span><span><span>&nbsp;</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><strong>11110: IIP</strong></span></span></span></span></span></span></p>
<ul>
<li><span><span><span><span><span><span>Store to RAM(REGA) from user input [INT]</span></span></span></span></span></span></li>
<li><span><span>Allows the computer to interpret integer data entered by the user.</span></span></li>
<li>Uses the value stored in REGA as a pointer for RAM.&nbsp;</li>
<li><span>ARGA: REGA address</span></li>
<li><span><span><span><span><span><span>ARGB: null</span></span></span></span></span></span></li>
</ul>
<p><span><span><span><span><span><span>&nbsp;</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><strong>111111: RST</strong></span></span></span></span></span></span></p>
<ul>
<li><span><span><span><span><span><span>RESET</span></span></span></span></span></span></li>
<li><span>Somewhat of a redundant instruction. May be removed in the future.</span></li>
<li><span>ARGA: null</span></li>
<li><span><span><span><span><span><span>ARGB: null</span></span></span></span></span></span></li>
</ul>
<p><span><span><span><span><span><span>&nbsp;</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>&nbsp;</span></span></span></span></span></span></p><div class="Clear"></div></div>