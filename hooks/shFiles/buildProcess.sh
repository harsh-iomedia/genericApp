clear
echo "======================== Creating Debug Build Certificates ==========================="
cd /$HOME/codes/creatingProductionshfilesforwebportal/genericApp
echo ""
echo ""
echo "================================== Git Checkout =========================================="
git checkout master
echo ""
echo ""
echo "===================================== Git Pull ======================================="
git pull
echo ""
echo ""
echo "======================== Gulp Task Runner ==========================="
gulp scripts
gulp inject_app
echo ""
echo ""
echo "========================= Removing The Files Into Backup ============================="
mv www/js backup/
echo ""
echo ""
echo "======================== Wating For Making A Stable Build ============================="
for i in {1..5}
do
	echo $i "in 5"
	sleep 1s
done
echo ""
echo ""
echo "=============================== Running The Project ===================================="
echo ""
echo ""
ionic serve
echo ""
echo "======================================== All Good ================================================="
echo ""