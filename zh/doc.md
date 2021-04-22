# Synergy Computer v.1.0
<div id="MessageContainer-284389" class="Message"><p>&nbsp;</p>
<img src="https://i.imgur.com/0X192sZ.png" alt="snapshot">
<p><strong><a href="https://rdpstudio.lanzous.com/iHqR1ocqloh"><img src="https://greenteaosforkbyrdpstudio.github.io/blog/picture/down.png" alt="Download"></a>&nbsp;</strong></p>
<p><strong>规格:</strong><strong><br></strong></p>
<p>&nbsp;</p>
<ul>
<li>29位体系结构。</li>
<li>31说明</li>
<li>平均运行频率为1.5hz</li>
<li>255个RAM地址（8帧读/写）</li>
<li>889 ROM地址（8帧读/写）</li>
<li>全功能活塞/DRAY显示，最初由三明治设计，并由我进行了大量修改。</li>
<li>29位二进制 &gt; BCD转换器</li>
<li>29位BCD &gt; 二进制转换器</li>
<li>2帧/位加法器-减法器。&nbsp;</li>
<li>10个寄存器</li>
</ul>
<p>&nbsp;</p>
<p><strong>未来可能的变化/增加：</strong></p>
<p>&nbsp;</p>
<ul>
<li>消极的 &nbsp;处理</li>
<li>随机数发生器</li>
<li>IF语句的改进（允许用户定义参数）。</li>
<li><span>将程序数据存储在RAM而不是ROM中。我想先创建二维RAM。</span></li>
<li>输入字符/整数 --&gt; RAM（不使用寄存器值定义RAM地址）</li>
<li>写入常量 --&gt; REG</li>
<li>IF &lt;= JUMP</li>
<li>IF &gt;= JUMP</li>
<li>扩展ROM。Y地址只使用5位中的3位。我可以把ROM从889个地址扩展到3937个地址。&nbsp;</li>
<li>扩展到15个（甚至63个）寄存器。</li>
<li><span>可能会更改ALU指令，以便REGA和REGB都可以在ARGA中定义。因此，为在ARGB中定义目标寄存器提供空间。目前，ALU的所有操作都是A？B--&gt;A。</span></li>
</ul>
<p>&nbsp;</p>
<p><strong>教学体系结构：</strong></p>
<p>&nbsp;</p>
<p>指令长度为29位。这是因为FILT技术拥有30个波长。第30位（最左边）用于表示0。</p>
<p>&nbsp;</p>
<p><span>前5位是控制位：</span></p>
<p>[00000][...................][....................]</p>
<p>&nbsp;<span>&nbsp;</span></p>
<p><span><span>接下来的12位是ARGA：</span></span></p>
<p>[........][000000000000][...................]</p>
<p>&nbsp;</p>
<p><span>最后12位是ARGB：</span></p>
<p><span>[........][...................][000000000000]</span></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>汇编程序：</strong></p>
<p><strong>&nbsp;</strong></p>
<p>带有使用说明的汇编程序可以在公共editonzip中找到。</p>
<p>&nbsp;</p>
<p><span class="underline">使用汇编程序：</span></p>
<p>&nbsp;</p>
<p>1. 将汇编程序的内容转移到Powder Toy.exe文件夹中。&nbsp;</p>
<p>2. 在此文件夹中创建扩展名为.scm的文件。&nbsp;</p>
<p>3. 使用文本编辑器打开文件（如Notepad++）</p>
<p>4. 编写汇编代码。&nbsp;</p>
<p>5. 打开汇编程序(SYNASM.exe文件)</p>
<p>6. 键入文件名（*.scm）</p>
<p>7. 如果文件组装成功，将在Powder Toy.exe文件夹中创建一个同名的*.sc文件。此文件将包含所有指令的所有汇编二进制信息。</p>
<p>&nbsp;</p>
<p><span class="underline">示例程序:&nbsp;</span></p>
<p>&nbsp;</p>
<p>DCO "@cTHIS PROGRAM WILL GENERATE THE FIBONACCInSEQUENCE...nn" ; <em>ends at 14.</em><br>DB 0x1, 0x0 ; <em>puts 0 in RAM1</em><br>DB 0x2, 0x1 ; <em>puts 1 in RAM2</em><br>LD 0x1, 0x1 ; <em>loads RAM1 to register1</em><br>LD 0x2, 0x2 ; <em>loads RAM2 to register2</em><br>ADD 0x1, 0x2 ; <em>adds register 1 and register 2</em><br>DIR 0x1, NUL ; <em>displays the result from register 1</em><br>DCO "@, " ;<br>ADD 0x2, 0x1 ; <em>adds register 2 and register 1</em><br>DIR 0x2, NUL ; <em>displays the result from register 2</em><br>DCO "@, " ;<br>JMP 0x7, 0x13 ; <em>jumps back to the first addition</em></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>LUA脚本，用于将*.sc信息导入Synergy计算机:</strong></p>
<p><strong>&nbsp;</strong></p>
<p>LUA脚本，允许您将*.sc文件导入Synergy Computer的ROM。该脚本将程序的第一条指令发送到地址001110000001（c7，r1），第二条指令发送到001110000010（c7，r2）等。程序的第128行将流向0011000000001（c6，r1）等。此计算机不会自动移动列，因此需要在每个Column的r127上使用JMP命令。（即来自c7、r127:JMP 0x6、0x1；）</p>
<p>在公共editon zip中可以找到LUA脚本。</p>
<p>&nbsp;</p>
<p><span>&nbsp;</span></p>
<p><span class="underline">使用LUA脚本：&nbsp;</span></p>
<p><span>&nbsp;</span></p>
<p><span>1. 将.lua文件移到Powder Toy文件夹。重命名它为synergy.lua. （或者其他什么）</span></p>
<p><span>2. 打开Synergy计算机，并键入 &lt;dofile("synergy.lua")&gt; 在LUA控制台</span></p>
<p>3. 输入.sc程序的名称（不带.sc扩展名）.&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>说明(无翻译)</strong><span> (as named by oldmud0):</span></p>
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